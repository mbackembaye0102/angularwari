import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

constructor(private account: CompteService) { }
comptes;
compte=[];
depots=[];
  ngOnInit() {
    
    // this.account.getAllCompte().subscribe(
    //   res=>{
    //     console.log(res);
    //     this.comptes=res
    
    //   }, err=>{
    //     console.log(err);
    //   }
    // ) ;

        
    // this.account.getAllDepot().subscribe(
    //   res=>{
    //     console.log(res);
    //     this.depots=res
    
    //   }, err=>{
    //     console.log(err);
    //   }
    // ) 

  }

  onsubmit (data:any){
    console.log(data);
         this.account.addAccount(data)
     .subscribe(
       data=>{
         console.log('Depôt effectué  avec succés');
      
       }, err=>{
        console.log(err);
       }
     )
   }

   submitcompte (data:any){
    console.log(data);
         this.account.rechercheCompte(data)
     .subscribe(
       data=>{
        console.log('code valide');
        this.compte=data
      
       }, err=>{
        console.log(err);
       }
     )
   }

}
