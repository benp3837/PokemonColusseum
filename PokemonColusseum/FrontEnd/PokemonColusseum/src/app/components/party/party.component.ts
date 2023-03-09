import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  //a list of the user's pokemon, which come in from the DB if the user wants to add a poke to party
  pokemon:Pokemon[];

  //list of parties which gets grabbed oninit
  parties:Party[] = []

  //toggles whether the list of pokemon is shown
  pokemonHidden:boolean = true;

  //toggles whether a party pokemon's info will be displayed
  partyPokeInfoHidden:boolean = true;

  //toggles the text of the remove from party button
  removeButtonMessage:String = "Remove";

  //saves the last clicked party pokemon (for the info box)
  selectedPoke:Pokemon = {
      name:"",
      types:""
  };

  //this will hold the index of the party selected (when adding/removing from party)
  selectedParty:number;


  constructor(private ps:PartyService, private pks:PokemonService, 
    private us:UserService, private toast:ToastrService) { }

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



  //ADD & REMOVE FROM PARTY FUNCTIONS---------------------------

  //renders the list of pokemon
  showPokemon(partyId:number){
    this.partyPokeInfoHidden = true; //we don't want the pc pokemon and party info together
    
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
      },
      (error:any) => {
        this.toast.error(p.name + " is already in this party!")
      }
    )
  }

  //this will make the pokemon info box visible and save the current pokemon's info
  togglePokeInfo(p:Pokemon, slot:number, partyId:number){

    this.pokemonHidden = true; //we don't want the pc pokemon and party info together

    partyId > 0? this.partyPokeInfoHidden = false : this.partyPokeInfoHidden = true; 
    if(p != null){
      this.selectedPoke = p;
      this.selectedPoke.slot = slot;
      this.selectedParty = partyId;
    }
  }

  //removes the selected pokemon from their party
  removePokemonFromParty(){

    console.log(this.removeButtonMessage)

    if(this.removeButtonMessage == "Remove"){
      this.removeButtonMessage = "Really?"
    }
    else if(this.removeButtonMessage == "Really?"){
      this.removeButtonMessage = "Remove"
      console.log("releasing " + this.selectedPoke.name)
      
      this.ps.removePokemonFromParty(this.selectedParty, this.selectedPoke.slot).subscribe(
        (data:any) => {
          console.log("updated party:");
          console.log(data.body);
          this.partyPokeInfoHidden = true;
          this.getPokemon();
        }
      )

    }

  }

  //POKEMON SORTING FUNCTIONS--------------------------------------------------------------

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