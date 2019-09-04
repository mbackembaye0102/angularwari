import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.scss']
})
export class EnvoieComponent implements OnInit {

  constructor(private transaction : TransactionService) { }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
         this.transaction.envoie(data)
     .subscribe(
       data=>{
         console.log('L\'envoie à été bien efféctué');
      
       }, err=>{
        console.log(err);
       }
     )
   }


}
