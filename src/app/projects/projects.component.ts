import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlugifyPipe } from '../shared/slugify.pipe';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { ApiService } from '../shared/api.service';
import { Project } from '../project/project.component';

@Component({
  selector: 'app-projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  filteredProjects: Array<object>;
  projects: Array<Project>;
  params = { queryParams: {} };

  selectActivities: FormControl;
  selectServices: FormControl;
  selectTechnologies: FormControl;
  selectYears: FormControl;
  inputSearch: FormControl;

  activities: Array<string>;
  services: Array<string>;
  technologies: Array<string>;
  years: Array<string>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private slugifyPipe: SlugifyPipe,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Projects');
    this.meta.updateTag({ name: 'description', content: 'Projects' });
    this.route.queryParams.subscribe((params: Params) => {
      this.selectActivities = new FormControl(params['activities'] || 'all');
      this.selectServices = new FormControl(params['services'] || 'all');
      this.selectTechnologies = new FormControl(params['technologies'] || 'all');
      this.selectYears = new FormControl(params['years'] || 'all');
      this.inputSearch = new FormControl(params['search'] || '');
      this.api.get(`${environment.API_URL}${environment.SHEET_ID}?includeGridData=true`, 'projects').subscribe(projects => {
        this.projects = projects.filter((project) => {
          // TODO make this more DRY
          this.activities = this.activities ? this.activities.concat(project.activities) : project.activities;
          this.services = this.services ? this.services.concat(project.services) : project.services;
          this.technologies = this.technologies ? this.technologies.concat(project.technologies) : project.technologies;
          this.years = this.years ? this.years.concat(project.years) : project.years;
          this.activities = this.activities.filter((item, pos) => this.activities.indexOf(item) === pos).sort();
          this.services = this.services.filter((item, pos) => this.services.indexOf(item) === pos).sort();
          this.technologies = this.technologies.filter((item, pos) => this.technologies.indexOf(item) === pos).sort();
          this.years = this.years.filter((item, pos) => this.years.indexOf(item) === pos).sort();
          if (this.selectActivities.value !== 'all' && project.activities) {
            const results = project.activities.filter((activity) => {
              return this.slugifyPipe.transform(activity) === this.selectActivities.value;
            });
            if (results.length === 0) {
              return false;
            }
          }
          if (this.selectServices.value !== 'all' && project.services) {
            const results = project.services.filter((service) => {
              return this.slugifyPipe.transform(service) === this.selectServices.value;
            });
            if (results.length === 0) {
              return false;
            }
          }
          if (this.selectTechnologies.value !== 'all' && project.technologies) {
            const results = project.technologies.filter((technology) => {
              return this.slugifyPipe.transform(technology) === this.selectTechnologies.value;
            });
            if (results.length === 0) {
              return false;
            }
          }
          if (this.selectYears.value !== 'all' && project.years) {
            const results = project.years.filter((year) => {
              return this.slugifyPipe.transform(year) === this.selectYears.value;
            });
            if (results.length === 0) {
              return false;
            }
          }
          if (this.inputSearch.value !== '') {
            const clientMatch = project.client.toLowerCase().indexOf(this.inputSearch.value.toLowerCase()) !== -1;
            const nameMatch = project.name.toLowerCase().indexOf(this.inputSearch.value.toLowerCase()) !== -1;
            return clientMatch || nameMatch;
          }
          return project;
        });
        this.filteredProjects = this.projects;
      });
    });
  }

  onChange(type, val) {
    this.params.queryParams[type] = val;
    this.router.navigate([], this.params);
  }
}
