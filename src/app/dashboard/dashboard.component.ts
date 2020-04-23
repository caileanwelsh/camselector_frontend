import { Component, OnInit } from '@angular/core';

import { IncidentsService } from '../incidents.service';
import { Incident } from '../modelTypes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  incidents: Incident [] = [];
  message: String = '';

  constructor(
    private incidentService : IncidentsService
  ) { }

  ngOnInit(): void {
    this.getIncidents()
  }

  getIncidents(): void{
    this.incidentService.getAllIncidents().
    subscribe(res => {
      if (res['incidents'].length < 1)
        this.message = 'No incidents in the database';
      this.incidents = res['incidents'];
    });
  }

  /*
  createIncident(): void{
    this.incidentService.createIncident().
    subscribe(res => {
      this.message = res['message'];
    });
  }
  */
}
