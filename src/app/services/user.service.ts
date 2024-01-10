import { Injectable } from '@angular/core';
import { UserInterface } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = ''


  constructor(private httpClient: HttpClient) { }


  addUser(user:UserInterface){
    return this.httpClient.post(`${this.url}/register`, user, {responseType:'text'} )
  }

  connect(user:UserInterface){
    return this.httpClient.post(`${this.url}/authenticate`, user, {responseType:'json'})
  }
}
