import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularwari';
  constructor(){}

  // ngOnInit():void{
  //   this.auth.loadToken();
  // }

//   isSuperAdmin(){
//     return this.auth.isSuperAdmin();

//   }

//   isAdminPartenaire(){
//     return this.auth.isAdminPartenaire();

//   }

//   isUser(){
//     return this.auth.isUser();

//   }

//   isCaissier(){
//     return this.auth.isCaissier();

//   }
//   isAdminSuper(){
//     return this.auth.isAdminSuper();

//   }
//   isAdmin(){
//     return this.auth.isAdmin();

//   }
// isAuthenticated(){

//   return this.auth.isAuthenticated();


// }

}
