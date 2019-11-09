import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SlugifyPipe } from '../shared/slugify.pipe';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = {};

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private slugifyPipe: SlugifyPipe,
    private transferState: TransferState,
  ) { }

  get(url: string, id: string): Observable<any> {
    console.log('api.get', url, id);
    const key = makeStateKey(id);
    if (this.data[id] && isPlatformBrowser(this.platformId)) {
      console.log('api.get.data');
      return of(this.data[id]);
    } else if (this.transferState.hasKey(key)) {
      console.log('api.get.transferState');
      const item = this.transferState.get(key, null);
      return of(item);
    } else {
      // if (environment.production && isPlatformBrowser(this.platformId)) {
      //   url = `./json/${id}.json`;
      // }
      // if (isPlatformServer(this.platformId)) {
      //   url = `http://localhost:4000${url}`;
      // }
      console.log('api.get.http', url);
      return this.http.get(url).pipe(
        map(items => {
          // if (items['sheets']) {
          //   const sheetItems = this.convertSheets(items['sheets']);
          //   Object.keys(sheetItems).forEach((sheetId) => {
          //     const sheetKey = makeStateKey(sheetId);
          //     this.data[sheetId] = sheetItems[sheetId];
          //     this.transferState.set(sheetKey, sheetItems[sheetId]);
          //     if (sheetId === id) {
          //       items = sheetItems[sheetId];
          //     }
          //   });
          // } else {
          // }
          this.data[id] = items;
          this.transferState.set(key, items);
          return items;
        })
      );
    }
  }

  convertSheets(sheets: Array<object>) {
    const sheetList = {};
    sheets.forEach((sheet) => {
      const rowItems = [];
      const rows = sheet['data'][0]['rowData'];
      rows.forEach((row, index) => {
        if (index > 0 && row['values']) {
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
            newRow['path'] =  this.slugifyPipe.transform(sheet['properties']['title']) + '/' + this.slugifyPipe.transform(newRow['name']);
            rowItems.push(newRow);
          }
        }
      });
      sheetList[sheet['properties']['title']] = rowItems;
    });
    return sheetList;
  }

  post(url, data, id): Observable<any> {
    return this.http.post(url, data).pipe(
      map(items => {
        return items;
      })
    );
  }
}
