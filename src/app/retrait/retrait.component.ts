import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
codes;
  constructor(private transaction : TransactionService) { }

  ngOnInit() {
  }

    onsubmitretrait (data:any){
    console.log(data);
         this.transaction.retrait(data)
     .subscribe(
       data=>{
         console.log('Le retrait  à été bien efféctué');
      
       }, err=>{
        console.log(err);
       }
     )
   }



  submitcode (data:any){
    console.log(data);
         this.transaction.rechercheCode(data)
     .subscribe(
       data=>{
       console.log(data);
        this.codes=data
      
       }, err=>{
        console.log(err);
       }
     )
   }
}
