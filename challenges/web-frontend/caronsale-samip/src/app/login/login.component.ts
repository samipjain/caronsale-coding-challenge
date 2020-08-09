import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';
import { UserLogin } from '../user-login';
import { CookieService } from 'ngx-cookie-service';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userLoginService: UserLoginService, private cookieService: CookieService) {}

  model = {
    userEmail: '',
    userPassword: ''
  }

  isError = false;
  userResults: UserLogin;

  private hasPasswordWithCycles(plainTextPassword: string, cycles: number):string {
    let hash = `${plainTextPassword}`;

    for (let i = 0; i < cycles; i++) {
      hash = sha512.sha512(hash);
    }
    console.log(hash)
    return hash
  }
  

  onSubmit() {
      this.isError = false
      // Hash password
      let hashPassword = this.hasPasswordWithCycles(this.model.userPassword, 5);

      this.userLoginService.userLogin(this.model.userEmail, hashPassword).then((response) => {
        console.log(response);
        this.userResults = response;
        this.cookieService.set('token', this.userResults.token);
        this.cookieService.set('userId', this.userResults.userId);
        this.cookieService.set('uuid', this.userResults.internalUserUUID);
        
        // Redirect to Overview page
        this.router.navigateByUrl('/overview')
      }, (error) => {
        this.isError = true
        console.log("Error from Login Component: " + error.statusText)
      })
  }

  ngOnInit(): void {
  }

}
