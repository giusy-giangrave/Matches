import { Component, OnInit } from '@angular/core';
import { Match, ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {

  public matches: Match[] = [];

  constructor(public resultService: ResultService) { }

  async ngOnInit() {
    this.matches = await this.resultService.matches();
    console.log('this.matches:', this.matches);
  }

}
