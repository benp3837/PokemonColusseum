import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon';
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

  //need this to emit a pokemon value to the options component
  @Output() notifyChild: EventEmitter<Pokemon> = new EventEmitter();

  //this Array will hold the incoming Pokemon data
  pokemon:Pokemon[] = [];

  //this will track indexes of each pokemon, since the IDs are wacky and HTML doesn't like my logic
  pokeIndexes:number[] = [];

  //displayed at the top of the page
  caughtPokes:number = 0;

  //this will help track which pokemon gets clicked
  currentPoke:number = 0;

  constructor(private ps:PokemonService, private us:UserService) { }

  ngOnInit(): void {

    this.getPokesFromDB();

    setTimeout(() => {
      console.log("Delayed for 2 seconds.");
      this.getPokeIndexes();
    }, 2000)

  }

    //show or hide the options and stats of a pokemon when clicked. 
    showPokeOptions(index:number){
      if(index === -1){
        this.hidePokeOptions = true;
      } else{
        this.hidePokeOptions = !this.hidePokeOptions;
        this.currentPoke = index 
        this.notifyChild.emit(this.pokemon[this.currentPoke])
      }
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
