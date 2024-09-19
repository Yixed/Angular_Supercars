import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User|null = null
  //url: string = "https://angular-supercars-back.vercel.app/api/users"
  
  url: string = "http://localhost:3000/api/users"

  constructor(private http : HttpClient, private cookieService : CookieService) {

    //If user exist on cookies, save it on local
    if(cookieService.check('user')){
      this.user = JSON.parse(cookieService.get('user')) 
    }
  }

  //register
  signup(name: string, email: string, pwd: string){
    return this.http.post(
      `${this.url}/register`,
      {
        name: name,
        email: email,
        password: pwd
      }
    )
  }

  //login
  login(email: string, pass: string){
    return this.http.post(`${this.url}/login`,
    {
      email: email,
      password: pass,
    })
  }

  //save user on cookies and local storage
  saveUser(user: User){
    this.user = user
    this.cookieService.set("user", JSON.stringify(user))
  }

  //delete user from cookies and local storage
  deleteUser(){
    this.user = null
    this.cookieService.delete("user")
  }
}
