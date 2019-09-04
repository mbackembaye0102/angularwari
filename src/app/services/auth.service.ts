import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers, Response} from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 host:string = "http://localhost:8000/api/login";
  jwt:string;
  username:string;
  roles: Array<string>;

  constructor(private http: HttpClient
            ) { 
              //this.getToken();
            }
//private headers ={headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))};
  login(data)/*: Observable<boolean>*/{
    //let headers =new Headers();

  //    headers.append('content-type', 'application/x-www-form-urlencoded');
  //   //  headers.append('Authorization', 'Bearer '+this.)
  //   return this.http.post(this.host, data,{headers: headers})
  //   .map(
  //     (resp: Response)=>{
  //    const token= resp.json().token;
  //       alert(token);
  //       this.jwt=token;
    
  //    localStorage.setItem('token',token);
       
  //  this.parseJWT();
  //       return true;
  //     }
  //   ).catch(this.handleError);
  
   return this.http.post(this.host, data,{observe: 'response'});

  }

  // private handleError(error: Response){
  //   return Observable.throw(error.json() || 'server error');
  // }
saveToken(jwt:string){
  localStorage.setItem('token',jwt);
 // const authorization=localStorage.getItem('token');
 

 this.jwt=jwt;
  this.parseJWT();
  //return authorization;
}

public getToken():string {
var local=localStorage.getItem('token');
//alert (local);
 return local;
}

parseJWT(){
  const jwtHelper= new JwtHelperService();
  const objWT=jwtHelper.decodeToken(this.jwt);
  //console.log(objWT);
  this.username=objWT.obj;
   this.roles=objWT.roles;
   localStorage.setItem('role', objWT.roles);
   localStorage.setItem('username', objWT.username)

}

getRole(){
  return localStorage.getItem('role');
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
return this.roles && (this.isAdmin() || this.isUser()
);

}

loadToken(){
  this.jwt= localStorage.getItem('token');
  this.parseJWT();
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
