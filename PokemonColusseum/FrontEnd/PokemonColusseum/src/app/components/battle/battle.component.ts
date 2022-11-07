import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Party } from 'src/app/models/party';
import { BattleService } from 'src/app/services/battle.service';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  //so that we have access to every party
  parties:Party[];

  //this will get populated with the party the user chooses
  chosenParty:Party;

  //once the user chooses a party, this will turn false (and display the actual battle)
  partyChosen:boolean = false;

  constructor(private ps:PartyService, private bs:BattleService) { }

  ngOnInit(): void {
    this.ps.getPartyFromDB().subscribe(
      (data:any) => {
        this.parties = data.body
        console.log(this.parties)
      }
    )
  }

  chooseParty(party:number){
    this.partyChosen = true;
    this.chosenParty = this.parties[party]
    console.log(this.chosenParty)
    this.bs.chosenParty = this.chosenParty
  }

}
