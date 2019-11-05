import { environment } from './src/environments/environment.prod';

const request = require('request');
const slugify = require('slugify');
const routes = ['/', '/projects'];
const req = request.defaults({
  headers: {
    'Authorization': `Bearer ${environment.token}`
  }
});

export function getPaths() {
  return new Promise((resolve, reject) => {
    const id = 'projects';
    console.log(`getPaths: ${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`);
    req.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, (err, res, items) => {
      console.log('getPaths complete');
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
        routes.push('/' + slugify(item.name, { lower: true }));
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
