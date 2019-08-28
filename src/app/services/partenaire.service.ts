import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  public host : string =" http://localhost:8000/api/listerpartenaire";

  private headers ={headers: new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('token'))};

  constructor(private http : HttpClient) { }

  getAllPartenaire(){
    return this.http.get(this.host, this.headers);

  }
}
