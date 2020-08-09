import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  title = 'caronsale-samip';
  isToken: string;

  ngOnInit(): void {
    this.isToken = this.cookieService.get('token');
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('userId');
    this.isToken = ''

    this.router.navigateByUrl('/overview')
  }
}
