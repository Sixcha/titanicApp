import { Injectable } from '@angular/core';
import { UserInterface } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url:string = ' http://localhost:3002'


  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{
    return this.httpClient.get(`${this.url}/api/passengers`);

  }
}
