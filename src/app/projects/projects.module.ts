import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ProjectsComponent, pathMatch: 'full'}
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
