import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { IncidentsService } from '../incidents.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];
  message = '';

  constructor(
    private incidentsService: IncidentsService
  ) { }

  ngOnInit(): void {
  }

  validateCDM(CDM): void{
    CDM = CDM.trim(); // remove trailing and leading whitespace
    if (!CDM) {
      this.message = 'Please provide a CDM in the textbox';
      return
    } // i.e. if empty
    

    this.incidentsService.validateCDM({CDM})
      .subscribe(message => {
        this.message = message['message'];
      });
  }

}
