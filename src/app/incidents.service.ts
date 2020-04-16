import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// Get the API URL (in dev, localhost, in production hosted site)
import { environment } from '../environments/environment';
const API_URL = environment.apiURL;
import { Incident } from './modelTypes';

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
  getAllIncidents(): Observable<Incident[]>{
    return this.http.get<Incident[]>(`${API_URL}/incidents`)
      .pipe(
        tap(result => console.log(`fetched incidents: ${result}`)),
        catchError(this.handleError<Incident[]>('getIncidents', []))
      );
  }

  // API: Get /incident:id
  getAnIncident(){

  }

  handleError<T>(operation = "operation", result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}}`);

      return of(result as T);
    };
  }
}
