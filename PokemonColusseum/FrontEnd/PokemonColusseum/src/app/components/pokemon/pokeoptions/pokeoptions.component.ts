import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonComponent } from '../pokemon.component';

@Component({
  selector: 'app-pokeoptions',
  templateUrl: './pokeoptions.component.html',
  styleUrls: ['./pokeoptions.component.css']
})
export class PokeoptionsComponent implements OnInit {

  //this is the text on the release button, which will change around
  releaseButton:string = "release"

  //This will change when the user confirms a deletion.
  @Output() notifyParent: EventEmitter<number> = new EventEmitter();

  //gets filled in with the event emitted pokemon 
  @Input() currentPokemon:Pokemon; 

  constructor(private ps:PokemonService, private pc:PokemonComponent) { }

  ngOnInit(): void {

  }

  //release a pokemon (delete from DB)
  release() {

    console.log(this.releaseButton)

    if(this.releaseButton == "release"){
      this.releaseButton = "really?"
      setTimeout(() => {
        this.releaseButton = "release"
      }, 2000)
    }
    else if(this.releaseButton == "really?"){
      this.releaseButton = "release"
      console.log("releasing " + this.currentPokemon.name)
      this.notifyParent.emit(-1);
      this.ps.deletePokemonFromDB(this.currentPokemon).subscribe( //DELETE request
        (data:any) => {
          this.pc.getPokesFromDB() //refresh the pokemon rendered on the Pokemon Component
        }
      ) 
    }
  }

}
