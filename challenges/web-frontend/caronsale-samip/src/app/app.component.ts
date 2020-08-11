import { Component, OnInit, Input } from '@angular/core';
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

  ngOnInit(): void {
    if (this.userAuthService.isUserLoggedIn()) {
      this.router.navigateByUrl('/overview')
    }
  }

  
}
