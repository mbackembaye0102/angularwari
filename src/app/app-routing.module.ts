import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { UserComponent } from './user/user.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'partenaire',
    component: PartenaireComponent
  },
  
  {
    path: 'user',
    component: UserComponent
  },
  
  {
    path: 'compte',
    component: CompteComponent
  },
  {
    path: 'depot',
    component: DepotComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
