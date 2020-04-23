import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Get the API URL (in dev, localhost, in production hosted site)
import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  upload(files){
    return this.http.post<any>(`${API_URL}/incidents`, this.httpOptions);
  }
}
