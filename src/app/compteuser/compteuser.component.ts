import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CompteService } from '../services/compte.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'


@Component({
  selector: 'app-compteuser',
  templateUrl: './compteuser.component.html',
  styleUrls: ['./compteuser.component.scss']
})
export class CompteuserComponent implements OnInit {
comptes;
util; 
utilisateurs;
  constructor(private account: CompteService, private user: UserService) { }

  ngOnInit() {
    this.account.getOneCompte().subscribe(
      res=>{
        console.log(res);
        this.comptes=res
    
      }, err=>{
        console.log(err);
      }
    ) ;

        
    this.user.getUserPart().subscribe(
      res=>{
        //console.log(res);
        this.utilisateurs=res
    
      }, err=>{
        console.log(err);
      }
    ) 
  }

  onsubmit (data:any){
    //console.log(data);
         this.account.addCompteUser(data)
     .subscribe(
       data=>{
         console.log('Compte attribué  avec succés');
      
       }, err=>{
        console.log(err);
       }
     )
   }


   submitcompteuser(data:any){
    console.log(data);
         this.user.rechercheUser(data)
     .subscribe(
       data=>{
        //console.log('code valide');
        this.util=data
      
       }, err=>{
      
        console.log(err);
       }
     )
   }
}
