import { Component, Input, OnInit } from '@angular/core';
import { Opponent } from 'src/app/models/opponent';
import { Party } from 'src/app/models/party';
import { Pokemon } from 'src/app/models/pokemon';
import { BattleService } from 'src/app/services/battle.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-midbattle',
  templateUrl: './midbattle.component.html',
  styleUrls: ['./midbattle.component.css']
})
export class MidbattleComponent implements OnInit {

  //this will get populated with the party the user chooses
  chosenParty:Party;

  //this will get populated when you click on a party pokemon
  chosenPoke:Pokemon = {
    name:"",
    types:"",
    sprite2:""
  };

  //this will switch around based on if a pokemon is switching out
  pokePic:string;

  //this will get populated with a random opponent from the DB
  opponent:Opponent = {
    opponentId:0,
    opponentClass:"",
    opponentName:"",
    pokemon1:null,
    pokemon2:null,
    pokemon3:null
  };

  constructor(private bs:BattleService, private us:UserService) { }

  ngOnInit(): void {

    this.bs.getOpponentFromDB().subscribe(

      (data:any) => {
        console.log(data.body)
        this.opponent = data.body
      }

    )

    this.chosenParty = this.bs.chosenParty
    this.chosenPoke = this.chosenParty.pokemon1
    this.pokePic = this.chosenPoke.sprite2

    setTimeout(() => {
      this.us.info.push("started a battle with " + this.opponent.opponentClass + " " + this.opponent.opponentName)
    }, 400)

  }

  hello(){
    console.log(this.chosenParty)
  }

  sendPokemonOut(p:Pokemon){

    if(this.chosenPoke.name != p.name){
      //display a pokeball for a second
      this.pokePic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"

      setTimeout(() => {
        this.chosenPoke = p;
        this.pokePic = p.sprite2;
      }, 400)
    }
    
  }

}
