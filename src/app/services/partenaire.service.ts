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
  constructor( private http:HttpClient) { }

  
  getAllPartenaire() : Observable<IPartenaire[]>  {
   return  this.http.get<IPartenaire[]>(this.url);
}

}
