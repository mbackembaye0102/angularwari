import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private url:string = "http://localhost:8000/api/listercomptes";
  private urldepot:string = "http://localhost:8000/api/listerdepot";


  constructor( private http:HttpClient) { }

  
  getAllCompte() : Observable<any[]>  {
   return  this.http.get<any>(this.url);
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
}
