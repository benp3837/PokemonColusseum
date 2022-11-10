import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})


export class UserService {

 httpOptions = {
    headers: new HttpHeaders({
      
      'Observe': 'response'
    })
  };

  //this will hold info about the trainer's session, which will populate in the welcome page
  info:String[] = [];

  //global user object, gets populated after login. Should take out password hehe
  user:User = {
      id:0,
      username:"Guest",
      password:"",
      caughtPokes:0
  }

  //user info for the profile component. gets updated as stuff happens. 
  //(battles will be part of the user object later)
  battles:number = 0;


  //gets populated in the component TS, though the values get inputted directly below
  //idek if I need this anymore
  loginCreds:any = {
    username:"",
    password:""
  }

  constructor(private http:HttpClient) { }

  login(loginCreds):Observable<HttpResponse<any>> {

    return this.http.post("http://localhost:8090/colusseum/users/login", loginCreds,
     {observe: "response"}) as Observable<HttpResponse<any>>;
    
  }

  register(u:User):Observable<HttpResponse<any>> {

    return this.http.post("http://localhost:8090/colusseum/users/register", u, 
    {observe: "response"}) as Observable<HttpResponse<any>>;

  }

}
