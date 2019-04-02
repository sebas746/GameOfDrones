import { Component, OnInit } from '@angular/core';
import { GamingService } from '../gaming.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public results: any = [];

  constructor(private _gamingService: GamingService,
    private _data: DataService,
    private route: Router) {
  }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this._gamingService.getGameStatistics().subscribe((data: {}) => {
      this.results = data;
    });
  }

}
