import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //holds the info from the user's session, courtesy of the UserService
  info:String[]; 

  //the user's info, courtesy of the UserService
  user:User;

  constructor(private us:UserService) { }

  ngOnInit(): void {

    this.info = this.us.info;

     this.user = this.us.user;

  }  


}
