import { Component } from '@angular/core';
import { UserInterface } from '../Interfaces'
import { UserService } from '../services/user.service';
//import { CookieService } from 'ngx-cookie-service';

const bcrypt = require('bcryptjs');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loggedIn:boolean = false;
//   cookie:string;

//   constructor(private userService: UserService, private cookieService: CookieService){
//     this.cookie = this.cookieService.get('user')
//     if (this.cookie){
//       if(this.cookie === undefined){
//         this.cookieService.delete('user')
//         return
//       }
//       this.loggedIn = true
//     }
    

//   }

//   signUp(newUser:UserInterface){
//     bcrypt.genSalt(10, (err:any, salt:any) => {
//         bcrypt.hash(newUser.password, salt, (err:any, hash:any) => {
//             if(err) throw err;
//             newUser.password = hash;
//             this.userService.addUser(newUser).subscribe()
//         })
//     })
// }

//   logIn(user:UserInterface){
//     this.userService.connect(user).subscribe((result:any) => {this.cookie=result.cookie; if(this.cookie !== undefined) this.cookieService.set('user',this.cookie); if(this.cookie && this.cookie !== undefined) this.loggedIn=true; window.location.reload()})
//   }

//   disconnect(){
//     this.cookie = ""
//     this.loggedIn = false
//     this.cookieService.delete('user')
//     window.location.reload()
//   }

}
