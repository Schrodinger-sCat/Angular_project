import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {NewModuleModule} from "./new-module/new-module.module";
import {NewServiceService} from "./new-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    NewModuleModule,
    HttpClientModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
