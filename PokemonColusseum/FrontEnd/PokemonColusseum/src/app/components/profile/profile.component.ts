import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private us:UserService, private ps:PokemonService) { }

  //grabbed from global user object in UserService
  username: String = this.us.user.username;
  caughtPokes: number = this.us.user.caughtPokes;
  lastPoke: any = this.ps.pokemon;
  battles:number = this.us.battles;

  ngOnInit(): void {

  console.log(this.lastPoke) //oh yeah. this comes from the pokeAPI 
  //so we have to call its values accordingly in the HTML. It's NOT the same as our Pokemon model

  }

}
