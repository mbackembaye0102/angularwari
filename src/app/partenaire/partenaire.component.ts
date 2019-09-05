import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  partenaires=[];
  etat=[];

  imageUrl: string="/assets/img/default.png ";
  fileToUpload: File=null;

  constructor( private auth: AuthService, private partenaire: PartenaireService, private router: Router) { }

  ngOnInit() {
    this.partenaire.getAllPartenaire()
    .subscribe(
      res=>this.partenaires=res,
      err=>console.log(err)
    )
  }

  handleFileInput(File : FileList){
    this.fileToUpload=File.item(0);
   var reader= new FileReader();
   reader.onload=(event:any)=>{
     this.imageUrl=event.target.result;

   }
   reader.readAsDataURL(this.fileToUpload);
  }
   
  onsubmit (data:any){
   console.log(data);
   console.log(this.fileToUpload);
    this.partenaire.addPartenaire(data, this.fileToUpload)
    .subscribe(
      data=>{
        console.log('Partenaire et Son admin crée avec succés');
       //  this.utilisateur=null;
       //  this.fileToUpload=null;
        //this.router.navigate(['/user'])
      }, err=>{
       console.log(err);
      }
    )
  }

  bloquerPartener (id: number){
    this.partenaire.bloquerPartenaire(id).subscribe(
      res => {
        this.etat =res
   //      if (res.messages) {
   //        Swal.fire({
   //          type: 'success',
   //          title: res.messages,
   //          showConfirmButton: true,
          
   //        })
   //  }
    window.location.reload();
    },
    err=>{
     console.log(err);
    }
  )
   }



}
