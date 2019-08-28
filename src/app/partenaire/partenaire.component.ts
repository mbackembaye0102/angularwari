import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  constructor( private partenaire: PartenaireService) { }
  partenaires;
  ngOnInit() {
    this.partenaire.getAllPartenaire()
    .subscribe(data=>{
      this.partenaires=data;
    }, err=>{
      console.log(err)
    }
      )
  }

}
