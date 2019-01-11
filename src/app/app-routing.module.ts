import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

const routeTemplates: Routes = [
  {
    pathMatch: 'full',
    path: 'modules/home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    pathMatch: 'full',
    path: 'modules/project',
    loadChildren: './project/project.module#ProjectModule'
  },
  {
    pathMatch: 'full',
    path: 'modules/projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routeTemplates),
      SharedModule.forRoot()
    ],
    exports: [
      RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
