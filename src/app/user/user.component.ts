import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
profils;
utilisateur={};
imageUrl: string="/assets/img/default.png ";
fileToUpload: File=null;
  constructor(private users : UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.users.getAllProfil().subscribe(
      res=>{
        console.log(res);
        this.profils=res
        if (this.auth.getRole()=='ROLE_SUPER_ADMIN' || this.auth.getRole()=='ROLE_ADMIN_SUPER'  ){
           this.profils=[this.profils[2],this.profils[3] ]
        }

      }, err=>{
        console.log(err);
      }
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
     this.users.addUser(data, this.fileToUpload)
     .subscribe(
       data=>{
         console.log('done');
         
        //  this.utilisateur=null;
        //  this.fileToUpload=null;
         //this.router.navigate(['/user'])

       }, err=>{
        console.log(err);
       }
     )
   }
}
