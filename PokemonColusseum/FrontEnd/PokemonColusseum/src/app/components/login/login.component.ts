import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usernameInput: string;
  public passwordInput: string;
  public loginMessage: string = "Log In";
  public user: User = null;

  public loginCreds:any = {
    username:"",
    password:""
  }

  constructor(private us:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  login(): void {

    console.log("hi");
    console.log(this.usernameInput);
    console.log(this.passwordInput);

    this.us.loginCreds = {
      username:this.usernameInput,
      password:this.passwordInput
    }

    //subscribes to the Observable returned by the login() method in the UserService
    this.us.login(this.us.loginCreds).subscribe(
      (data:any) => {
        console.log(data)
        this.user = data.body;
        this.us.user = data.body;
        console.log(this.user)
        console.log(this.us.user)

        //check STATUS CODE to determine if login was successful 
        if(data.status == 202){
          this.route.navigate(['/welcome']);
        } 
      },
      //if login fails (doesn't send back a 202), the button displays this error message.
      (error:any) => {
        this.loginMessage = "Login failed! Try again";
      }

    )
    //It should return a populated User object, or so I thought.
    //INTERESTING... the one in the subscribe() method is populated but this isn't... async issue?
    //maybe make it wait (timing event) to see if speed is in fact the issue
    console.log(this.user);
      //this also attests to the fact that the party stuff isn't populated correctly
      //check if the logic you're trying to do is within the subscribe complete? parameter


  }
  
  //this just takes the user to the register component, which has the actual functionality
  register(): void {
    this.route.navigate(['/register']);
  }

}