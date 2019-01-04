import { environment } from './src/environments/environment.prod';

const request = require('request');
const slugify = require('slugify');
const routes = ['/'];
const req = request.defaults({
  headers: {
    'Authorization': `Bearer ${environment.token}`
  }
});

export function getPaths() {
  return new Promise((resolve, reject) => {
    console.log(`getPaths: ${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`);
    req.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, (err, res, data) => {
      console.log('getPaths complete');
      if (err) { return reject(err); }
      data = JSON.parse(data);
      if (data['error']) { return reject(data); }
      const rows = data['sheets'][0]['data'][0]['rowData'];
      rows.forEach((rowItem, rowIndex) => {
        if (rowIndex > 0 && rowItem['values'][1].formattedValue) {
          routes.push(slugify(rowItem['values'][1].formattedValue, { lower: true }));
        }
      });
      resolve(routes);
    });
  });
}
