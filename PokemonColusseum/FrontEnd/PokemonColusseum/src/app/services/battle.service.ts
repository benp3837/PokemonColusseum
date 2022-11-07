import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opponent } from '../models/opponent';
import { Party } from '../models/party';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  //this will get filled with the party the user chooses to battle
  chosenParty:Party;

  constructor(private http:HttpClient) { }

  getOpponentFromDB():Observable<HttpResponse<Opponent>>{

    return this.http.get("http://localhost:8090/colusseum/opponents/", 
    {observe: "response"}) as Observable<HttpResponse<Opponent>>

  }

}
