import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router, private userAuthService: UserAuthService) { }

  title = 'caronsale-samip';
  
  isLoggedIn: boolean;

  ngOnInit(): void {
    this.isLoggedIn = this.userAuthService.getIsUserLoggedIn();
    console.log(this.isLoggedIn);
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('userId');
    this.cookieService.delete('uuid');
    // this.isToken = ''
    this.isLoggedIn = false;

    this.router.navigateByUrl('/')
  }

}
