import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPartenaire } from '../partenaire';
@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  // Headers ={headers: new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'))};
  // public host : string =" http://localhost:8000/api/listerpartenaires";
  // constructor(private http : HttpClient) { }
 
  // getAllPartenaire():Observable<any>{
  //   return this.http.get(this.host, this.Headers);
  // }

  private url:string = "http://localhost:8000/api/listerpartenaires";
  private bloquerpartenaire:string = "http://localhost:8000/api/partenaires/statut/";

  constructor( private http:HttpClient) { }

  
  getAllPartenaire() : Observable<IPartenaire[]>  {
   return  this.http.get<any>(this.url);
}

bloquerPartenaire(id :number){
  return  this.http.get<any>(this.bloquerpartenaire+id);
}

addPartenaire(partener, fileToUpload){
  const host = "http://localhost:8000/api/partenaires";

  const formData: FormData= new FormData();
  formData.append('entreprise', partener.entreprise);
  formData.append('raisonSocial', partener.raisonSocial);
  formData.append('ninea', partener.ninea);
  formData.append('adresse', partener.adresse);
  formData.append('username', partener.username);
  formData.append('prenom', partener.prenom);
  formData.append('nom', partener.nom);
  formData.append('telephone', partener.telephone);

  formData.append('imageName', fileToUpload, fileToUpload.name);
  return this.http.post(host, formData);
}
}
