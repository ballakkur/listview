import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  constructor(public http: HttpClient) { }
  


  public getData(): Observable<any> {
    return this.http.get(`http://localhost:3000/getData`);
  }

}
