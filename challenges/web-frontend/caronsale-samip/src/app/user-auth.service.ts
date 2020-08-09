import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private cookieService: CookieService) { }

  isUserLoggedIn() {
    console.log(this.cookieService.get('userId'))
    if (this.cookieService.get('userId') != '' && this.cookieService.get('token') != '' && this.cookieService.get('uuid') != '') {
      console.log(this.cookieService.get('userId'))
      return true
    }
    else {
      return false
    }
  }
}
