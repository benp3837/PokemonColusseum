import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {

  //This is a variable that changes a bunch to give the user some info
  public infoH5:string = ""

  public username:String = this.us.user.username

  //this Pokemon object will get filled with Http Response data, and rendered on the component's HTML
  public pokemon:Pokemon = {
    name:"",
    types:[{type:{name:""}}, {type:{name:""}}],
    sprites:{front_default:"", back_default:""}
  }

  public pokeFound:boolean;

  //This is the function that gets our Pokemon object using a function from the Pokemon Service
  //In order to get data from the Observable returned by the Service, we need to SUBSCRIBE
  getPoke(){

    //this.input is the variable that gets filled by the user on the webpage
    this.ps.getPokemonFromApi().subscribe(

      //assign the body of the Http Response to our pokemon variable
      (data:any) => {

        console.log(data.body)

        
        if(data.body.types[0].type.name == "grass" || data.body.types[0].type.name == "bug" || 
        data.body.types[0].type.name == "poison" || data.body.types[0].type.name == "ghost" ){

        this.pokeFound = true
        this.infoH5 = ""

        this.pokemon = data.body; //get the data, put it in our pokemon variable
        console.log(this.pokemon); //print out our pokemon, helpful for debugs.
        this.us.user.caughtPokes++; //increment the counter

        //populate the pokemon in the service
        this.ps.pokemon = data.body;

        this.ps.updateCaughtPokes(this.us.user.id).subscribe()

      } else if(data.body.types[1] != undefined){

        if(data.body.types[1].type.name == "grass" || data.body.types[1].type.name == "bug" || 
        data.body.types[1].type.name == "poison" || data.body.types[1].type.name == "ghost" ){

        this.pokeFound = true
        this.infoH5= "";

        this.pokemon = data.body; //get the data, put it in our pokemon variable
        console.log(this.pokemon); //print out our pokemon, helpful for debugs.
        this.us.user.caughtPokes++; //increment the counter

        //populate the pokemon in the service
        this.ps.pokemon = data.body;
        
        this.ps.updateCaughtPokes(this.us.user.id).subscribe()

      } else {
        this.pokeFound = false
        this.infoH5 = "No Pokemon found! Search more...";
      }

    } //end of else-if with nested if/else

       else {
        this.pokeFound = false
        this.infoH5 = "No Pokemon found! Search more...";
      }

    },
      (error:any) => { //in case of errors, this block will run
        console.log("it got away!");
      }

    )

  } //end of getPoke

  //this function adds a caught pokemon to the DB
  catchPokemon(){
    this.ps.addPokemonToDB().subscribe()
 
    this.pokeFound = false; //set this back to false to wipe the options
    this.toast.info("Caught " + this.titlecasePipe.transform(this.pokemon.name) + "!")
    this.us.info.push("caught a wild " + this.pokemon.name + " in the forest")
  }

    //we need to INJECT the pokemon service so that we have access to its functions/variables
    constructor(private ps:PokemonService, private us:UserService, private toast:ToastrService, private titlecasePipe:TitleCasePipe) { 

    }

    ngOnInit(): void {

    }

}
