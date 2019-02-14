import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AppLoader } from './app/app.loader';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let appElements = document.getElementsByTagName('app-root');

if (appElements.length > 0) {
  for (let i = 0; i < appElements.length; i++) {

    if (appElements[i].children.length === 0) {
      platformBrowserDynamic().bootstrapModule(AppModule).then(
        (injector: any) => {
          new AppLoader(injector).loadComponent(AppComponent, appElements[i].id);
          console.log("BOOTSTRAPING-APP[", appElements[i].id, "]");
        });
    }
  };
}
