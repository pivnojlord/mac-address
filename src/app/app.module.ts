import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CookieModule, CookieService} from '@gorniv/ngx-universal';
import { AppComponent } from './app.component';
import {AppRoutes} from './app.routing';
import {UniversalStorage} from './shared/storage/universal.storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutes,
    CookieModule.forRoot(),
  ],
  providers: [
    CookieService,
    UniversalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
