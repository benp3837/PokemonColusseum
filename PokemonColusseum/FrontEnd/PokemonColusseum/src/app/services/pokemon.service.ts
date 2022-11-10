import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonToDB } from '../models/pokemon-to-db';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //filled with pokemon data when observable comes in from pokeapi (in the catch functionality)
  pokemon:Pokemon = {
    name:"",
    types: "",
    sprite1:"",
    sprite2:"",
    user_id: 0,
    stats:""
  }

  //this Array will hold the user's Pokemon
  allPokemon:Pokemon[] = [];

  constructor(private http:HttpClient, private us:UserService) { }

  //This function will GET Pokemon data from pokeapi
  //Note - we use a GET request to GET a Pokemon object as an observable
  //Note note - remember, we can use observable to get data from a server, whether that's our Java or some external API
  getPokemonFromApi():Observable<HttpResponse<Pokemon>>{

    //randomize a pokemon (1-904 for now, but by type or something else later)
    let randomNum = Math.floor(Math.random() * 904) + 1
    console.log(randomNum)

    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + randomNum + "/", {observe: "response"}) as Observable<HttpResponse<Pokemon>>
  }
  
  //function that calls the server side functionality to increment caughtPokes by 1
  updateCaughtPokes(id:number):Observable<HttpResponse<User>>{
    console.log("in update")
    return this.http.put("http://localhost:8090/colusseum/users/pokeCount/" + id, {}) as Observable<HttpResponse<User>>
  }

  //function that gets all pokemon from the DB
  getAllPokemonFromDB(id:number):Observable<HttpResponse<Pokemon[]>>{
    return this.http.get("http://localhost:8090/colusseum/pokemon/" + id, {observe: "response"}) as Observable<HttpResponse<Pokemon[]>>
  }

  //function that adds a pokemon to the DB
  addPokemonToDB():Observable<HttpResponse<PokemonToDB>>{

    //workaround to single typed pokemon crashing my shit
    let type2:string;
    if(this.pokemon.types[1]){
      type2 = this.pokemon.types[1].type.name
    } else {
      type2 = null
    }

    //have to craft a DB friendly pokemon, since the pokemon above is from the PokeAPI
    let DBPokemon:PokemonToDB = {
      name:this.pokemon.name,
      sprite1:this.pokemon.sprites.front_default,
      sprite2:this.pokemon.sprites.back_default,
      type1:this.pokemon.types[0].type.name,
      type2:type2,
      hp:this.pokemon.stats[0].base_stat,
      speed:this.pokemon.stats[5].base_stat,
      attack:this.pokemon.stats[1].base_stat,
      defense:this.pokemon.stats[2].base_stat,
      sAttack:this.pokemon.stats[3].base_stat,
      sDefense:this.pokemon.stats[4].base_stat,
      user:this.us.user.id
    }

    console.log(DBPokemon);

    return this.http.post("http://localhost:8090/colusseum/pokemon/add", DBPokemon) as Observable<HttpResponse<PokemonToDB>>
  }

  //function that deletes a single pokemon (DELETE request with id as path param)
  deletePokemonFromDB(poke:Pokemon):Observable<HttpResponse<Pokemon>>{
      console.log(poke.pokemonId)
      return this.http.delete("http://localhost:8090/colusseum/pokemon/" + poke.pokemonId) as Observable<HttpResponse<Pokemon>>
  }

}
