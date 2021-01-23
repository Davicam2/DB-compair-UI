import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuntimeService} from '../services/runtime.service';
import { ComponentsModule} from './components/components.module';
import { ViewsModule } from './views/views.module';
import { AngularMatModule} from './angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appInitializerFn = (appConfig: RuntimeService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ViewsModule,
    AngularMatModule,
    BrowserAnimationsModule

  ],
  providers: [
    RuntimeService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [RuntimeService]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
