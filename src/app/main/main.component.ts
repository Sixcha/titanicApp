import { Component } from '@angular/core';
import { UserInterface } from '../Interfaces'
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

const bcrypt = require('bcryptjs');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loggedIn:boolean = false;
  cookie:string;
  data?:Observable<any>;

   constructor(private userService: UserService, private cookieService: CookieService, private dataService: DataService){
     this.cookie = this.cookieService.get('user')
     if (this.cookie){
       if(this.cookie === undefined){
         this.cookieService.delete('user')
         return
       }
       this.loggedIn = true
       this.data = this.dataService.getData()
       return
     }

   }

   signUp(newUser:UserInterface){
     bcrypt.genSalt(10, (err:any, salt:any) => {
         bcrypt.hash(newUser.password, salt, (err:any, hash:any) => {
             if(err) throw err;
             newUser.password = hash;
             this.userService.addUser(newUser).subscribe()
         })
     })
 }

   logIn(user:UserInterface){
     this.userService.connect(user).subscribe((result:any) => {this.cookie=result.cookie; if(this.cookie !== undefined) this.cookieService.set('user',this.cookie); if(this.cookie && this.cookie !== undefined) this.loggedIn=true; window.location.reload()})
   }

   disconnect(){
     this.cookie = ""
     this.loggedIn = false
     this.cookieService.delete('user')
     window.location.reload()
   }

}
