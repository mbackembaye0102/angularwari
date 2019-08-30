import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  partenaires=[];
  constructor( private partenaire: PartenaireService, private router: Router) { }

  ngOnInit() {
    this.partenaire.getAllPartenaire()
    .subscribe(
      res=>this.partenaires=res,
      err=>console.log(err)
    )
  }

}
