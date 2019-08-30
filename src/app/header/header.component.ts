import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private auth: AuthService) { }

  // ngOnInit() {
  //   this.auth.loadToken();
  // }


  isSuperAdmin(){
    return this.auth.isSuperAdmin();

  }

  isAdminPartenaire(){
    return this.auth.isAdminPartenaire();

  }

  isUser(){
    return this.auth.isUser();

  }

  isCaissier(){
    return this.auth.isCaissier();

  }
  isAdminSuper(){
    return this.auth.isAdminSuper();

  }
  isAdmin(){
    return this.auth.isAdmin();
  }
isAuthenticated(){
  return this.auth.isAuthenticated();
}


logOut(){
  this.auth.logOut();
}

}
