import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonComponent } from '../pokemon.component';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';
import { PartyService } from 'src/app/services/party.service';
import { Party } from 'src/app/models/party';

@Component({
  selector: 'app-pokeoptions',
  templateUrl: './pokeoptions.component.html',
  styleUrls: ['./pokeoptions.component.css']
})
export class PokeoptionsComponent implements OnInit {

  //this is the text on the release button, which will change around
  releaseButton:string = "release"

  //this boolean will toggle if we get options 1 (party/release) or options 2 (which party)
  partyButtonChosen:boolean = false

  //gets filled in with parties from partyservice
  parties:Party[] = [];

  //This will change when the user confirms a deletion or addition to party.
  @Output() tellParentHideOptions: EventEmitter<number> = new EventEmitter();

  //gets filled in with the event emitted pokemon 
  @Input() currentPokemon:Pokemon; 

  constructor(private ps:PokemonService, private pts:PartyService, private pc:PokemonComponent, private toast:ToastrService, private titlecasePipe:TitleCasePipe) {  }

  ngOnInit(): void {
    
  }



  //release a pokemon (delete from DB)
  release() {

    console.log(this.releaseButton)

    if(this.releaseButton == "release"){
      this.releaseButton = "really?"
      // setTimeout(() => {
      //   this.releaseButton = "release"
      // }, 2000)
    }
    else if(this.releaseButton == "really?"){
      this.releaseButton = "release"
      console.log("releasing " + this.currentPokemon.name)
      this.tellParentHideOptions.emit(-1);

      this.ps.deletePokemonFromDB(this.currentPokemon).subscribe( //DELETE request
      (data:any) => {
        this.pc.getPokesFromDB() //refresh the pokemon rendered on the Pokemon Component
        this.toast.info("Goodbye, " + this.titlecasePipe.transform(this.currentPokemon.name) + "!")
      },
      (error:any) => {
        console.log("hi")
        this.toast.error("Can't Release Party Pokemon!");
      })
    }

  }

  addToParty(){
    
    this.tellParentHideOptions.emit(-2);
    
  }

}