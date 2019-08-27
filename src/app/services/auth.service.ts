import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

 host:string = "http://localhost:8000/api/login";
  jwt:string;
  username:string;
  roles: Array<string>;

  constructor(private http: HttpClient 
            ) { }

  login(data) {
    return this.http.post(this.host, data,{observe: 'response'});
  }

saveToken(jwt:string){
  localStorage.setItem('token',jwt);
  this.jwt=jwt;
  this.parseJWT();
}

parseJWT(){
  let jwtHelper= new JwtHelperService();
  let objWT=jwtHelper.decodeToken(this.jwt);
  console.log(objWT);
  this.username=objWT.obj;
  this.roles=objWT.roles;
}


isSuperAdmin(){
  return this.roles.indexOf('ROLE_SUPER_ADMIN')>=0;
  
}

isAdminPartenaire(){
  return this.roles.indexOf('ROLE_ADMIN_PARTENAIRE')>=0;

}

isUser(){
  return this.roles.indexOf('ROLE_USER')>=0;

}

isCaissier(){
  return this.roles.indexOf('ROLE_CAISSIER')>=0;

}
isAdminSuper(){
  return this.roles.indexOf('ROLE_ADMIN_SUPER')>=0;

}
isAdmin(){
  return this.roles.indexOf('ROLE_ADMIN')>=0;

}
isAuthenticated(){
return this.roles && (this.isAdmin() || this.isUser());

}

logOut(){
  localStorage.removeItem('token');
  this.initParams();

}

initParams(){
  this.jwt=undefined;
  this.username=undefined;
  this.roles=undefined;
}


}
