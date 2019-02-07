import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//main entry point
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { DynamicNgLoader } from './dynamic-ng-loader';
import { ComponentRef } from '@angular/core'

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// let loadedComponentReferences: ComponentRef<AppComponent> = [];

platformBrowserDynamic().bootstrapModule(AppModule)
  // .then(function(ng2ModuleInjector) {
  //   let ngLoader = new DynamicNgLoader(ng2ModuleInjector);
  //
  //   let container = document.getElementById('angular-container');
  //   container.classList += "js-flex-container";
  //
  //   document.getElementById('angular-app').hidden = false;
  //
  //   // let count = 0;
  //   // document.getElementById('add-component').onclick = function() {
  //   //   let parent = document.createElement('app-parent');
  //   //   container.appendChild(parent);
  //   //   let compRef = ng2Loader.loadComponentAtDom(CheckListItem, parent, (instance) => {
  //   //     instance.value = document.getElementById('text-input').value;
  //   //   });
  //   //   loadedComponentReferences.push(compRef);
  //   // };
  //   // document.getElementById('remove-components').onclick = function() {
  //   //   loadedComponentReferences.forEach(compRef => {
  //   //     compRef.destroy();
  //   //   });
  //   // }
  //
  // })
  .catch(err => console.error(err));
