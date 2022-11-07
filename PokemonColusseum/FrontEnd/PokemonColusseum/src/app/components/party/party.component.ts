import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/models/party';
import { Pokemon } from 'src/app/models/pokemon';
import { PartyService } from 'src/app/services/party.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})

export class PartyComponent implements OnInit {

  //toggles whether the list of pokemon is shown
  pokemonHidden:boolean = true;

  //a list of the user's pokemon, which come in from the DB if the user wants to add a poke to party
  pokemon:Pokemon[];

  //this will hold the index of the party selected (when adding to party)
  selectedParty:number;

  //list of parties which gets grabbed oninit
  parties:Party[] = []

  constructor(private ps:PartyService, private pks:PokemonService, private us:UserService) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  //this will get the user's parties from the DB
  getPokemon(): void {

     //call the service method that makes the HTTP Request
     this.ps.getPartyFromDB().subscribe(

      {next:data=>{
        this.parties = data.body as Party[] //the once empty party array is now full!
        this.ps.parties = this.parties // anddddd now so is the one in the service :)
        console.log("DATA.BODY from DB:")
        console.log(data.body) //just to see the incoming data if needed.
      }},
    )
  }

  //pokemon gathering and choosing functions---------------------------

  //renders the list of pokemon
  showPokemon(partyId:number){
    console.log("hi")
    this.pokemonHidden = !this.pokemonHidden;

    //store the party that was selected
    this.selectedParty = partyId;

    this.pks.getAllPokemonFromDB(this.us.user.id).subscribe(
      (data:any) => {
        this.pokemon = data.body
        console.log("pokemon:")
        console.log(data.body)
      }
    )
  }

  //closes the list of pokemon (if the user hits the X)
  hidePokemon(){
    this.pokemonHidden = true;
  }

  //adds the selected pokemon to the selected party
  addPokemonToParty(p:Pokemon){
    console.log("adding " + p.name + " to party " + this.selectedParty) 
    this.ps.addPokemonToParty(this.selectedParty, p).subscribe(
      (data:any) => {
        console.log("updated party:")
        console.log(data.body)
        this.pokemonHidden = true;
        this.getPokemon();
      }
    )
  }

  //pokemon sorting functions--------------------------------------------------------------

  //display the Pokemon in alphabetical order
  alphabetize(){
    this.pokemon = this.pokemon.sort((a, b) => (a.name > b.name ? 1 : -1))
    console.log(this.pokemon)
  }

  earliest(){
    this.pokemon = this.pokemon.sort((a, b) => (a.pokemonId > b.pokemonId ? 1 : -1))
  }

  latest(){
    this.pokemon = this.pokemon.sort((a, b) => (a.pokemonId < b.pokemonId ? 1 : -1))
  }

}