import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor( private http:HttpClient) { }

  envoie(envoye){
    const host = "http://localhost:8000/api/envoie";
  
    const formData: FormData= new FormData();
    formData.append('prenom', envoye.username);
    formData.append('nom', envoye.prenom);
    formData.append('typePiece', envoye.nom);
    formData.append('telephone', envoye.telephone);
    formData.append('profil', envoye.profil);
      return this.http.post(host, formData);
  }

}
