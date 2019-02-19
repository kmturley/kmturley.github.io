import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

import { environment } from '../../environments/environment';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  articles: Array<object>;
  awards: Array<object>;
  brands: Array<object>;
  projects: Array<object>;

  public carouselLarge: NguCarouselConfig = {
    grid: {xs: 0, sm: 0, md: 0, lg: 0, all: 300},
    load: 1,
    loop: false,
    slide: 1,
    touch: true,
    velocity: 0
  };

  public carouselSmall: NguCarouselConfig = {
    grid: {xs: 0, sm: 0, md: 0, lg: 0, all: 120},
    load: 1,
    loop: false,
    slide: 1,
    touch: true,
    velocity: 0
  };

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    console.log('HomeComponent');
    this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'articles').subscribe(items => {
      this.articles = items;
      // console.log('articles', this.articles);
    });
    this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'awards').subscribe(items => {
      this.awards = items;
      // console.log('awards', this.awards);
    });
    this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'brands').subscribe(items => {
      this.brands = items;
      // console.log('brands', this.brands);
    });
    this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'projects').subscribe(items => {
      this.projects = items;
      // console.log('projects', this.projects);
    });
  }
}
