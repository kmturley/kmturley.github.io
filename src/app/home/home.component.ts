import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { SlugifyPipe } from '../shared/slugify.pipe';

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
  certifications: Array<object>;
  projects: Array<object>;

  public careerLength: number;

  public carouselLarge: NguCarouselConfig = {
    grid: {xs: 0, sm: 0, md: 0, lg: 0, all: 300},
    load: 1,
    loop: false,
    slide: 1,
    touch: true,
    velocity: 0,
    point: {
      visible: false,
      hideOnSingleSlide: true
    }
  };

  public carouselSmall: NguCarouselConfig = {
    grid: {xs: 0, sm: 0, md: 0, lg: 0, all: 120},
    load: 1,
    loop: false,
    slide: 1,
    touch: true,
    velocity: 0,
    point: {
      visible: false,
      hideOnSingleSlide: true
    }
  };

  constructor(
    private api: ApiService,
    public slugifyPipe: SlugifyPipe
  ) {}

  ngOnInit() {
    console.log('HomeComponent');
    const startDate = new Date(2006, 9, 0).getTime();
    const endDate = new Date().getTime();
    this.careerLength = this.toYear(endDate - startDate);

    this.api.get(`/assets/json/articles.json`, 'articles').subscribe(items => {
      this.articles = items;
      // console.log('articles', this.articles);
    });
    this.api.get(`/assets/json/awards.json`, 'awards').subscribe(items => {
      this.awards = items;
      // console.log('awards', this.awards);
    });
    this.api.get(`/assets/json/brands.json`, 'brands').subscribe(items => {
      this.brands = items;
      // console.log('brands', this.brands);
    });
    this.api.get(`/assets/json/certifications.json`, 'certifications').subscribe(items => {
      this.certifications = items;
      // console.log('certifications', this.certifications);
    });
    this.api.get(`/assets/json/projects.json`, 'projects').subscribe(items => {
      this.projects = items;
      // console.log('projects', this.projects);
    });
  }

  toYear(num: number) {
    return Math.ceil(num / 1000 / 60 / 60 / 24 / 365);
  }
}
