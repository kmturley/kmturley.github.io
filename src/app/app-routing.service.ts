import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Routes } from '@angular/router';
import { Observer, Observable } from 'rxjs';
import { SlugifyPipe } from './shared/slugify.pipe';

import { ApiService } from './shared/api.service';
import { environment } from '../environments/environment';

@Injectable()
export class AppRoutingService {
  public routes: Routes = [];
  user: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private api: ApiService,
    private slugifyPipe: SlugifyPipe
  ) { }

  getRoutes() {
    return new Promise((resolve, reject) => {
      this.getData(resolve);
    });
    // if (environment.production) {
    //   return new Promise((resolve, reject) => {
    //     this.getData(resolve);
    //   });
    // } else if (isPlatformBrowser(this.platformId)) {
    //   return new Promise((resolve, reject) => {
    //     this.loadGapi().subscribe((a) => {
    //       this.loadGapiAuth().subscribe((user: any) => {
    //         if (user && user.isSignedIn()) {
    //           localStorage.setItem('token', user['getAuthResponse']().access_token);
    //           this.getData(resolve);
    //         } else {
    //           resolve(this.routes);
    //         }
    //       });
    //     });
    //   });
    // }
  }

  getData(resolve) {
    return this.api.get(`/assets/json/projects.json`, 'projects').subscribe(routes => {
      this.routes.push({
        pathMatch: 'full',
        path: '',
        loadChildren: './home/home.module#HomeModule',
        data: {
          name: 'Home'
        }
      });
      this.routes.push({
        pathMatch: 'full',
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
        data: {
          name: 'Projects'
        }
      });
      routes.forEach((route) => {
        this.routes.push({
          pathMatch: 'full',
          path: 'projects/' + this.slugifyPipe.transform(route.client) + '-' + this.slugifyPipe.transform(route.name),
          loadChildren: './project/project.module#ProjectModule',
          data: {
            name: route.name
          }
        });
      });
      resolve(this.routes);
    });
  }

  login() {
    window['gapi'].auth2.getAuthInstance().signIn();
  }

  private loadGapi(): Observable<void> {
    return Observable.create((observer: Observer<boolean>) => {
      const node = document.createElement('script');
      node.src = 'https://apis.google.com/js/api.js';
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
      node.onload = () => {
        observer.next(true);
        observer.complete();
      };
    });
  }

  private loadGapiAuth(): Observable<Object> {
    return Observable.create((observer: Observer<Object>) => {
      window['gapi'].load('auth2', () => {
        const auth2 = window['gapi'].auth2.init({
          client_id: environment.CLIENT_ID,
          scope: environment.SCOPE,
          ux_mode: 'popup'
        });
        auth2.signIn().then(() => {
          this.user = auth2.currentUser.get();
          observer.next(this.user);
          observer.complete();
        });
      });
    });
  }
}
