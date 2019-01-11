import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProjectComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
