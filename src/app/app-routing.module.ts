import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { UserComponent } from './user/user.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoieComponent } from './envoie/envoie.component';
import { RetraitComponent } from './retrait/retrait.component';
import { CompteuserComponent } from './compteuser/compteuser.component';


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
  },
  {
    path: 'envoie',
    component: EnvoieComponent
  },
  {
    path: 'retrait',
    component: RetraitComponent
  },
  {
    path: 'compteuser',
    component: CompteuserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
