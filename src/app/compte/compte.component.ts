import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { CompteService } from '../services/compte.service';
import { ICompte} from '../compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  comptes:ICompte[];
  partener=[];
  constructor(private account: CompteService, private part: PartenaireService) { }

  ngOnInit() {
      
    this.account.getAllCompte().subscribe(
      res=>{
        console.log(res);
        this.comptes=res
    
      }, err=>{
        console.log(err);
      }
    ) ;

        
    this.part.getAllPartenaire().subscribe(
      res=>{
        //console.log(res);
        this.partener=res
    
      }, err=>{
        console.log(err);
      }
    ) 
  }
  onsubmit (data:any){
    console.log(data);
         this.account.addCompte(data)
     .subscribe(
       data=>{
         console.log('Compte attribué  avec succés');
      
       }, err=>{
        console.log(err);
       }
     )
   }


}
