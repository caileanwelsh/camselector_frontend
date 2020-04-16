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

  constructor(
    private incidentService : IncidentsService
  ) { }

  ngOnInit(): void {
    this.getIncidents()
  }

  getIncidents(): void{
    this.incidentService.getAllIncidents().
    subscribe(incidents => this.incidents = incidents);
  }
}
