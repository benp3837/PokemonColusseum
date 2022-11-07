import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/models/party';
import { Pokemon } from 'src/app/models/pokemon';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})

export class PartyComponent implements OnInit {

  parties:Party[] = []

  constructor(private ps:PartyService) { }

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
}