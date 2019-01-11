import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { SlugifyPipe } from '../shared/slugify.pipe';
import { forkJoin } from 'rxjs';

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
