import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DragScrollModule } from 'ngx-drag-scroll';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
