import { Injectable } from '@angular/core';
import {logging} from 'selenium-webdriver';

@Injectable()
export class AuthService {

  loggedIn= false;
  constructor() { }
  checkAuth() {
   /*this. loggedIn = true;*/
   return this.loggedIn;
  }

}
