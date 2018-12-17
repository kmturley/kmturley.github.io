import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  sheetId = '1KhjaYHc01RKvq5UrJlTdi9mz5O9IcTF5Uh-7bYdlsks';
  sheetUrl = `https://spreadsheets.google.com/feeds/list/${this.sheetId}/od6/public/values?alt=json`;

  constructor(
    private http: HttpClient
  ) {}

  getData() {
    return this.http.get(this.sheetUrl);
  }
}
