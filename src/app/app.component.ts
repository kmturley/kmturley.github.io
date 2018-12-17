import { Component } from '@angular/core';

import { SheetService } from './common/sheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Array<object>;

  constructor(
    private sheetService: SheetService
  ) {
    console.log('App Component');
    this.sheetService.getData().subscribe((data) => {
      this.projects = data['feed']['entry'];
      console.log('projects', this.projects);
    });
  }
}
