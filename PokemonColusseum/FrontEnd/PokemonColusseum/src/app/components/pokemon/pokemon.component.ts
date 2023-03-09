//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { Party } from 'src/app/models/party';
import { Pokemon } from 'src/app/models/pokemon';
import { PartyService } from 'src/app/services/party.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //this toggles the pokemon's options onclick, changes either in the method below or from child 
  hidePokeOptions:boolean = true;

  //toggle whether the parties render
  hideParties:boolean = true;

  //need this to emit a pokemon value to the options component
  @Output() notifyChild: EventEmitter<Pokemon> = new EventEmitter();

  //this Array will hold the incoming Pokemon data
  pokemon:Pokemon[] = [];

  //gets filled in with parties from partyservice
  parties:Party[] = [];

  //this will track indexes of each pokemon, since the IDs are wacky and HTML doesn't like my logic
  pokeIndexes:number[] = [];

  //displayed at the top of the page
  caughtPokes:number = 0;

  //this will help track which pokemon gets clicked
  currentPoke:number = 0;

  constructor(private ps:PokemonService, private us:UserService, private pts:PartyService) { }

  ngOnInit(): void {

    this.getPokesFromDB();

    this.pts.getPartyFromDB().subscribe(
      {next:data=>{
        this.pts.parties = data.body as Party[] //in case there are new changes, update the central data
        this.parties = this.pts.parties
        console.log("DATA.BODY from DB:")
        console.log(data.body) //just to see the incoming data if needed.
      }},
    )

    setTimeout(() => {
      console.log("Delayed for 2 seconds.");
      this.getPokeIndexes();
    }, 2000)

  }

    //show or hide the options and stats of a pokemon when clicked. 
    //TODO: Have the stats show up at the top like in the party component
    showPokeOptions(index:number){
      if(index === -1){
        this.hidePokeOptions = true;
      } else if(index === -2) {
        this.showOrHideParties()
      } else{
        //if you click the selected pokemon again, the options disappear.
        //if you click a different pokemon from the current select, shift the options to the new poke
        if(this.currentPoke + 1 === index){
          if(this.hidePokeOptions === false){
            this.hidePokeOptions = true
          }else{
            this.hidePokeOptions = false
          }
        }
      
        this.currentPoke = index 
        this.notifyChild.emit(this.pokemon[this.currentPoke])
      }
    }

  showOrHideParties() {
    this.hideParties = !this.hideParties
    this.hidePokeOptions = true
  }

  //gets the indexes of the pokemon Array (for individual options)
  getPokeIndexes(){
    for(let i = 0; i < this.pokemon.length; i++){
      this.pokeIndexes.push(i)
    }
    console.log(this.pokeIndexes)
  }

  //gets all pokemon from the DB
  getPokesFromDB(){
    let currentUser = this.us.user.id;
    this.ps.getAllPokemonFromDB(currentUser).subscribe(

      (data:any)=>{
        console.log(data.body)
        this.pokemon = data.body;
        this.ps.allPokemon = data.body;
        this.caughtPokes = this.pokemon.length;
        this.earliest(); //the pokemon will be rendered earliest first by default
      },

      (error:any)=>{
        //TODO: tell the user something went wrong idk. not logged in? no pokemon.
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
