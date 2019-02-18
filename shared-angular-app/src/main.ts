import { enableProdMode } from '@angular/core';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AppLoader } from './app/app.loader';
import { environment } from './environments/environment';
import { loadApp } from './app/angular.loader';

if (environment.production) {
  enableProdMode();
}

let appElements = document.getElementsByTagName('app-root');

if (appElements.length > 0) {
  for (let i = 0; i < appElements.length; i++) {

    if (appElements[i].children.length === 0) {
      loadApp(appElements[i].id);
    }
  };
}
