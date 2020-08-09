import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private userAuthService: UserAuthService) { }

  title = 'caronsale-samip';
  isToken: string;

  ngOnInit(): void {
    console.log(this.userAuthService.isUserLoggedIn())
    this.isToken = this.cookieService.get('token');
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('userId');
    this.cookieService.delete('uuid');
    this.isToken = ''

    this.router.navigateByUrl('/')
  }
}
