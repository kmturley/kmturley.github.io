import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { ApiService } from '../shared/api.service';

export class Page {
  client?: string;
  description?: string;
  images?: Array<string>;
  name?: string;
  services?: Array<string>;
  technologies?: Array<string>;
  years?: Array<string>;

  constructor(data: {
    client?: string,
    description?: string,
    images?: Array<string>,
    name?: string,
    services?: Array<string>,
    technologies?: Array<string>,
    years?: Array<string>,
  }) {
    if (data.client) { this.client = data.client; }
    if (data.description) { this.description = data.description; }
    if (data.images) { this.images = data.images; }
    if (data.name) { this.name = data.name; }
    if (data.services) { this.services = data.services; }
    if (data.technologies) { this.technologies = data.technologies; }
    if (data.years) { this.years = data.years; }
  }
}

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  public page: Page;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    console.log('PageComponent');
    this.route.data.subscribe((data) => {
      this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'projects').subscribe(pages => {
        this.page = pages.filter((page: Page) => {
          return page.name === data.name;
        })[0];
        // console.log('PageComponent', data.name, this.page);
        this.title.setTitle(this.page['name']);
        this.meta.updateTag({ name: 'description', content: this.page['name'] });
      });
    });
  }

}
