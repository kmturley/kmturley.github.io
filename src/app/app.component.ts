import { Component } from '@angular/core';

import { SheetService } from './common/sheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  brands: Array<object>;
  projects: Array<object>;

  constructor(
    private sheetService: SheetService
  ) {
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
