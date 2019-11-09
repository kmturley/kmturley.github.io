import { environment } from './src/environments/environment.prod';

const fs = require('fs');
const path = require('path');
const request = require('request');
const slugify = require('slugify');

const pathSheet = `${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`;
const pathJson = path.join(__dirname, 'browser/assets/json/projects.json');
const req = request.defaults({
  headers: {
    'Authorization': `Bearer ${environment.token}`
  }
});

export function getPaths() {
  return new Promise((resolve, reject) => {
    console.log('getPaths', pathJson);
    const routes = ['/', '/projects'];
    const projects = JSON.parse(fs.readFileSync(pathJson, 'utf8'));
    console.log('getPathsFromSheet complete', projects.length);
    projects.forEach((project) => {
      routes.push('/projects/' + slugify(project.client, { lower: true }) + '-' + slugify(project.name, { lower: true }));
    });
    resolve(routes);
  });
}

export function getPathsFromSheet() {
  return new Promise((resolve, reject) => {
    console.log('getPathsFromSheet', pathSheet);
    const id = 'projects';
    const routes = ['/', '/projects'];
    req.get(pathSheet, (err, res, items) => {
      console.log('getPathsFromSheet complete', items.length);
      if (err) { return reject(err); }
      items = JSON.parse(items);
      if (items['error']) { return reject(items); }
      if (items['sheets']) {
        const sheetItems = convertSheets(items['sheets']);
        Object.keys(sheetItems).forEach((sheetId) => {
          if (sheetId === id) {
            items = sheetItems[sheetId];
          }
        });
      }
      items.forEach((item) => {
        routes.push('/projects/' + slugify(item.client, { lower: true }) + '-' + slugify(item.name, { lower: true }));
      });
      resolve(routes);
    });
  });
}

function convertSheets(sheets: Array<object>) {
  const sheetList = {};
  sheets.forEach((sheet) => {
    const rowItems = [];
    const rows = sheet['data'][0]['rowData'];
    rows.forEach((row, index) => {
      if (index > 0) {
        const newRow = {};
        row['values'].forEach((rowItem, rowIndex) => {
          const rowKey = rows[0]['values'][rowIndex].formattedValue;
          let rowValue = rowItem.formattedValue;
          if (rowKey && rowValue) {
            if (rowKey.charAt(rowKey.length - 1) === 's') {
              rowValue = rowItem.formattedValue.split('\n');
            }
            newRow[rowKey] = rowValue;
          }
        });
        if (newRow['name']) {
          newRow['path'] = slugify(sheet['properties']['title'], { lower: true }) + '/' + slugify(newRow['name'], { lower: true });
          rowItems.push(newRow);
        }
      }
    });
    sheetList[sheet['properties']['title']] = rowItems;
  });
  return sheetList;
}
