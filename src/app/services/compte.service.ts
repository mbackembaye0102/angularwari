import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private url:string = "http://localhost:8000/api/listercompte";
  private url2:string = "http://localhost:8000/api/listercomptes";


  private urldepot:string = "http://localhost:8000/api/listerdepot";


  constructor( private http:HttpClient) { }

  
  getAllCompte() : Observable<any[]>  {
   return  this.http.get<any>(this.url);
  }


  getOneCompte() : Observable<any[]>  {
    return  this.http.get<any>(this.url2);
   }
 
  getAllDepot() : Observable<any[]>  {
    return  this.http.get<any>(this.urldepot);
   }
 

  addAccount(account){
    const host = " http://localhost:8000/api/depots";
  
    const formData: FormData= new FormData();
    formData.append('montant', account.montant);
    formData.append('compte', account.compte);

    return this.http.post(host, formData);
  }

  addCompte(compte){
    const host = " http://localhost:8000/api/comptes";
  
    const formData: FormData= new FormData();
    formData.append('partenaire', compte.partenaire);

    return this.http.post(host, formData);
  }

  addCompteUser(id : number, compte){
    const host = "  http://localhost:8000/api/addCompte/";
  
    const formData: FormData= new FormData();
    formData.append('utilisateur', compte.utilisateur);
    formData.append('partenaire', compte.partenaire);


    return this.http.post(host+id, formData);
  }
}
