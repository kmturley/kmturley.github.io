import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
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
import { FooterComponent } from './footer/footer.component';

export function init(routeService: AppRoutingService) {
  return () => routeService.getRoutes();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserTransferStateModule,
    // DragScrollModule,
    HttpClientModule,
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
