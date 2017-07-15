import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BycertainComponent } from './home/bycertain/bycertain.component';
import { ByuserandtypeComponent } from './home/byuserandtype/byuserandtype.component';
import { AllComponent } from './home/all/all.component';
import {AppRouting} from "./app-routing.module";
import {ComplainService} from "./home/complain.service";
import {HttpModule} from "@angular/http";
import { ComplainDetailsComponent } from './home/complain-details/complain-details.component';
import { ComplainListComponent } from './home/complain-list/complain-list.component';
import { ComplainItemComponent } from './home/complain-list/complain-item/complain-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BycertainComponent,
    ByuserandtypeComponent,
    AllComponent,
    ComplainDetailsComponent,
    ComplainListComponent,
    ComplainItemComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
      FormsModule
  ],

  providers: [ComplainService ,
    {provide: LocationStrategy,
      useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
