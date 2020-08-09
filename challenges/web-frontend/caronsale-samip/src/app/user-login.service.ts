import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  userLogin = (email: string, password: string): Promise<UserLogin> => {
    let promise = new Promise<UserLogin>((resolve, reject) => {
      this.http.put('https://caronsale-backend-service-dev.herokuapp.com/api/v1/authentication/' + email, {"password": password})
        .toPromise()
        .then((response) => {
          resolve(response as UserLogin)
        }, (error) => {
          reject(error)
        })
    })
    return promise
  }
}
