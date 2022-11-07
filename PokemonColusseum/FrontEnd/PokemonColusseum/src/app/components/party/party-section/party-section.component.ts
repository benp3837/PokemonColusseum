import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/models/party';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-party-section',
  templateUrl: './party-section.component.html',
  styleUrls: ['./party-section.component.css']
})
export class PartySectionComponent implements OnInit {

  parties:Party[] = this.ps.parties

  constructor(private ps:PartyService) { }

  ngOnInit(): void {

    

  }

}
