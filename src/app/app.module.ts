import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from "primeng/api";
import {
  APP_CONFIG,
  AuthModule,
  MockAuthModule,
  StandardTranslateHttpLoader,
  TkitPortalModule
} from 'portal-lib';


import { HttpClient } from '@angular/common/http';
import { BASE_PATH } from './generated';
import { environment } from 'src/environments/environment';
const authModule = environment.production ? AuthModule : MockAuthModule;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TkitPortalModule,
    authModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StandardTranslateHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: BASE_PATH, useValue: 'angular-library' },
    {provide:  MessageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
