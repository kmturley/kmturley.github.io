import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { ApiService } from '../shared/api.service';

export class Project {
  client?: string;
  description?: string;
  images?: Array<string>;
  name?: string;
  activities?: Array<string>;
  services?: Array<string>;
  technologies?: Array<string>;
  years?: Array<string>;

  constructor(data: {
    client?: string,
    description?: string,
    images?: Array<string>,
    name?: string,
    activities?: Array<string>,
    services?: Array<string>,
    technologies?: Array<string>,
    years?: Array<string>,
  }) {
    if (data.client) { this.client = data.client; }
    if (data.description) { this.description = data.description; }
    if (data.images) { this.images = data.images; }
    if (data.name) { this.name = data.name; }
    if (data.activities) { this.activities = data.activities; }
    if (data.services) { this.services = data.services; }
    if (data.technologies) { this.technologies = data.technologies; }
    if (data.years) { this.years = data.years; }
  }
}

@Component({
  selector: 'app-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  public project: Project;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    console.log('ProjectComponent');
    this.route.data.subscribe((data) => {
      this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'projects').subscribe(projects => {
        this.project = projects.filter((project: Project) => {
          return project.name === data.name;
        })[0];
        console.log('ProjectComponent', data.name, this.project);
        this.title.setTitle(this.project['name']);
        this.meta.updateTag({ name: 'description', content: this.project['name'] });
      });
    });
  }

}
