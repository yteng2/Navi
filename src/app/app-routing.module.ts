import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {C1Component} from './c1/c1.component';
import {C3Component} from './c3/c3.component';
import {C2Component} from './c2/c2.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  { path: 'c1', component: C1Component , canActivate : [AuthGuardService] },
  { path: 'c2', component: C2Component },
  { path: 'c3', component: C3Component }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
