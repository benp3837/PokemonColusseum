import { Component, Input, OnInit } from '@angular/core';
import { Opponent } from 'src/app/models/opponent';
import { Party } from 'src/app/models/party';
import { BattleService } from 'src/app/services/battle.service';

@Component({
  selector: 'app-midbattle',
  templateUrl: './midbattle.component.html',
  styleUrls: ['./midbattle.component.css']
})
export class MidbattleComponent implements OnInit {

  //this will get populated with the party the user chooses
  chosenParty:Party;

  //this will get populated with a random opponent from the DB
  opponent:Opponent;

  constructor(private bs:BattleService) { }

  ngOnInit(): void {

    this.chosenParty = this.bs.chosenParty

    this.bs.getOpponentFromDB().subscribe(

      (data:any) => {
        console.log(data.body)
        this.opponent = data.body
      }

    )

  }

  hello(){
    console.log(this.chosenParty)
  }

}
