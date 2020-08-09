import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private cookieService: CookieService) { }

  isLoggedIn: boolean = false;

  isUserLoggedIn() {
    if (this.cookieService.get('userId') != '' && this.cookieService.get('token') != '' && this.cookieService.get('uuid') != '') {
      this.isLoggedIn = true
      return true
    }
    else {
      this.isLoggedIn = false
      return false
    }
  }

  getIsUserLoggedIn() {
    return this.isLoggedIn
  } 
}
