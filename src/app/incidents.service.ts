import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// Get the API URL (in dev, localhost, in production hosted site)
import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  // API: GET /incidents
  getAllIncidents(): Observable<Object>{
    return this.http.get(`${API_URL}/incidents`)
      .pipe(
        tap(result => console.log(`fetched incidents: ${result['incidents']}`)),
        catchError(this.handleError('getIncidents', []))
      );
  }

  // API: Get /incident:id
  getAnIncident(){

  }

  
  validateCDM(files){
    this.httpOptions["reportProgress"] = true;
    this.httpOptions["observe"] = 'events';
    console.log("Validating CDM" + JSON.stringify(files));
    return  this.http.post(`${API_URL}/incidents`, files, this.httpOptions)
      .pipe(
        tap(result => console.log(`Message: ${result['message']}`)),
        catchError(this.handleError('createIncident', []))
      ); 
  } 

  handleError<T>(operation = "operation", result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}}`);

      return of(result as T);
    };
  }
}
