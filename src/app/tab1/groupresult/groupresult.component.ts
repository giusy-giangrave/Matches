import { Component, OnInit } from '@angular/core';
import { GroupResult, ResultService } from 'src/app/result.service';


@Component({
  selector: 'app-groupresult',
  templateUrl: './groupresult.component.html',
  styleUrls: ['./groupresult.component.scss'],
})
export class GroupresultComponent implements OnInit {
  
  public groups: GroupResult[] = [];
  constructor(public resultService: ResultService) { }

  async ngOnInit() {
    this.groups = await this.resultService.groups();
    console.log('this.groups:', this.groups);
  }

}
