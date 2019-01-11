import { NgModule, ModuleWithProviders } from '@angular/core';
import { LazyLoadImageDirective } from './lazy-load-image.directive';
import { SlugifyPipe } from './slugify.pipe';

@NgModule({
  imports: [],
  declarations: [
    LazyLoadImageDirective,
    SlugifyPipe
  ],
  exports: [
    LazyLoadImageDirective,
    SlugifyPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ LazyLoadImageDirective, SlugifyPipe ]
    };
  }
}
