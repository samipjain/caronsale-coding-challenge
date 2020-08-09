import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  emailList = ['salesman@random.com', 'salesman2@random.com', 'dealership@alwaysAvailable.com']

  model = {
    userEmail: '',
    userPassword: ''
  }

  isError = false

  private hasPasswordWithCycles(plainTextPassword: string, cycles: number):string {
    let hash = `${plainTextPassword}`;

    for (let i = 0; i < cycles; i++) {
      hash = sha512.sha512(hash);
    }
    console.log(hash)
    return hash
  }
  

  onSubmit() {
    if (this.emailList.includes(this.model.userEmail)) {
      this.isError = false
      // Hash password
      let hashPassword = this.hasPasswordWithCycles(this.model.userPassword, 5);

      // if Password matches


      // Redirect to Overview page
      this.router.navigateByUrl('/overview')
    } else {
      // Error messagee
      this.isError = true
    } 
  }

  ngOnInit(): void {
  }

}
