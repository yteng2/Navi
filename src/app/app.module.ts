import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavibarComponent } from './navibar/navibar.component';
import { AppRoutingModule } from './/app-routing.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    C1Component,
    C2Component,
    C3Component,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
