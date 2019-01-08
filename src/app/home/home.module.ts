import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { DragScrollModule } from 'ngx-drag-scroll';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    // DragScrollModule,
    FormsModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
