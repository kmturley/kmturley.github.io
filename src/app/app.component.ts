import { Component } from '@angular/core';

import { SheetService } from './common/sheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Array<object>;
  brands: Array<object>;
  projects: Array<object>;

  constructor(
    private sheetService: SheetService
  ) {
    this.sheetService.getSheet('articles').subscribe((items) => {
      this.articles = items;
      console.log('articles', this.articles);
    });
    this.sheetService.getSheet('brands').subscribe((items) => {
      this.brands = items;
      console.log('brands', this.brands);
    });
    this.sheetService.getSheet('projects').subscribe((items) => {
      this.projects = items;
      console.log('projects', this.projects);
    });
  }
}
