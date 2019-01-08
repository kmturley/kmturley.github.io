import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
// import { DragScrollModule } from 'ngx-drag-scroll';

import { ApiService } from './shared/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingService } from './app-routing.service';
import { AuthService } from './shared/auth.service';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function init(routeService: AppRoutingService) {
  console.log('init');
  return () => routeService.getRoutes();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserTransferStateModule,
    // DragScrollModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    ReactiveFormsModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    // DragScrollModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [AppRoutingService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
    ApiService,
    AppRoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
