import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompte } from '../compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private url:string = "http://localhost:8000/api/listercompte";
  private url2:string = "http://localhost:8000/api/listercomptes";


  private urldepot:string = "http://localhost:8000/api/listerdepotuser";
  private recherchecompte:string = "http://localhost:8000/api/recherchecompte";



  constructor( private http:HttpClient) { }

  
  getAllCompte() : Observable<any[]>  {
   return  this.http.get<any>(this.url);
  }


  getOneCompte() : Observable<ICompte[]>  {
    return  this.http.get<ICompte[]>(this.url2);
   }
 
  getAllDepot() : Observable<any[]>  {
    return  this.http.get<any>(this.urldepot);
   }
   rechercheCompte(data) : Observable<any[]>  {

    return  this.http.post<any>(this.recherchecompte,data);
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

  addCompteUser(data){
    const host = "http://localhost:8000/api/addCompte";
    console.log(data);
    const formData: FormData= new FormData();
   formData.append('username', data.username);
   formData.append('compte', data.compte);
    return this.http.post(host, formData);
  }
}
