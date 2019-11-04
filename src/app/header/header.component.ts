import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public careerLength: number;

  constructor() { }

  ngOnInit() {
    const startDate = new Date(2006, 9, 0).getTime();
    const endDate = new Date().getTime();
    this.careerLength = this.toYear(endDate - startDate);
  }

  toYear(num: number) {
    return Math.ceil(num / 1000 / 60 / 60 / 24 / 365);
  }

}
