import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${environment.sheetId}/values/`;

  constructor(
    private http: HttpClient
  ) {}

  getSheet(sheetName: string) {
    return this.http.get(`${this.sheetUrl}${sheetName}?key=${environment.apiKey}`).pipe(map((data) => {
      const rowLabels = data['values'][0];
      return data['values'].slice(1).map((itemValue) => {
        const newItem = {};
        itemValue.forEach((fieldValue, fieldIndex) => {
          newItem[rowLabels[fieldIndex]] = fieldValue;
        });
        return newItem;
      });
    }));
  }
}
