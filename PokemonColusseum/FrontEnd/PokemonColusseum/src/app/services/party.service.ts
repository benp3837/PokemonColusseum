import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from '../models/party';
import { Pokemon } from '../models/pokemon';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  //this will get filled with the current User's party so that it's accessible everywhere
  parties:Party[] = []

  constructor(private http:HttpClient, private us:UserService) { }

  //get the party list from the DB (which should just be party objects that have pokemon arrays)
  getPartyFromDB():Observable<HttpResponse<Party[]>> {

    return this.http.get("http://localhost:8090/colusseum/parties/" + this.us.user.id, 
    {observe: "response"}) as Observable<HttpResponse<Party[]>>

  }  

  //gets a full pokemon object from PokeAPI
  getPokemonFromAPI(poke:any):Observable<HttpResponse<Pokemon>> {

    console.log("hello " + poke)

    let strPoke = poke as String

    console.log("String: " + strPoke)

    let pokeFix = strPoke.toLowerCase()

    console.log(pokeFix)

    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + pokeFix, {observe: "response"}) as Observable<HttpResponse<Pokemon>>;
  }


  //send pokemon to party function


}
