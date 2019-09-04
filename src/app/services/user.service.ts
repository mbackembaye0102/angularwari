import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:8000/api/listerprofil";
  private listeruser:string = "http://localhost:8000/api/listeruser";


  constructor( private http:HttpClient) { }

  
  getAllProfil() : Observable<any[]>  {
   return  this.http.get<any>(this.url);
}

getAllUser() : Observable<any[]>  {
  return  this.http.get<any>(this.listeruser);
}



addUser(user, fileToUpload){
  const host = "http://localhost:8000/api/register";

  const formData: FormData= new FormData();
  formData.append('username', user.username);
  formData.append('prenom', user.prenom);
  formData.append('nom', user.nom);
  formData.append('telephone', user.telephone);
  formData.append('profil', user.profil);
  formData.append('imageName', fileToUpload, fileToUpload.name);
  return this.http.post(host, formData);
}
}
