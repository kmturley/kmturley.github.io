import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';

import { LazyLoadImageDirective } from './lazy-load-image.directive';
import { SlugifyPipe } from './slugify.pipe';

import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NguCarouselModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    LazyLoadImageDirective,
    SlugifyPipe
  ],
  exports: [
    CommonModule,
    NguCarouselModule,
    RouterModule,
    HeaderComponent,
    LazyLoadImageDirective,
    SlugifyPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        HeaderComponent,
        LazyLoadImageDirective,
        SlugifyPipe
      ]
    };
  }
}
