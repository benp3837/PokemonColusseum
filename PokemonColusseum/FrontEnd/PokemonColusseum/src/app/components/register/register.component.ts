import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //tells the user to register, OR gives them an error message
  registerMessage:string = "Create an Account"

  //gets filled with data as user fills it out
  newUser:User = {
    id:null,
    username:null,
    password:null,
    caughtPokes:null
  }

  //this holds the password check input
  passwordConf = "";
  //this boolean displays the error message when the passwords don't match
  hiddenToggle = true; //hide it til the user starts entering the new password

  //need this to be true for the user to send their registration
  passwordsMatch = false;

  constructor(private us:UserService, private route:Router) { }

  ngOnInit(): void {

    //is this an awful way to do the password check? executing a function every 400 millis?
    setInterval(()=> { this.passEqualCheck() }, 400);

  }

  passEqualCheck(){

    if(this.passwordConf){ //if nothing is written in the passwordConf input, nothing happens

      //thanks to the setInterval in the ngOnInit, this checks for the match every 400 milliseconds
      if(this.newUser.password === this.passwordConf){
        this.hiddenToggle = true //wait why does this work. shouldn't it be hiddenToggle = false?
        this.passwordsMatch = true
      } else {
        this.hiddenToggle = false
      }
    }
}

  register(){

    if(this.passwordsMatch){

      this.us.register(this.newUser).subscribe(

        (data:any) => {
          console.log("NEW USER:")
          console.log(data.body)
          this.route.navigate(["/welcome"])
        },

        (error:any) => {
          this.registerMessage = "Registration Failed! Try harder."
        }

      )

    } else {
      //PASSWORDS DON'T MATCH DUMMY
      alert("passwords don't match, dummy");
    }

  }

}
