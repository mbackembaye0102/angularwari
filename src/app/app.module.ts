import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoieComponent } from './envoie/envoie.component';
import { RetraitComponent } from './retrait/retrait.component';
import { PartenaireService } from './services/partenaire.service';
import { HttpModule } from '@angular/http';
import { InterceptorService } from './services/interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { CompteuserComponent } from './compteuser/compteuser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserComponent,
    PartenaireComponent,
    CompteComponent,
    DepotComponent,
    EnvoieComponent,
    RetraitComponent,
    FooterComponent,
    CompteuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, PartenaireService,
    { provide: HTTP_INTERCEPTORS,
       useClass: InterceptorService,
       multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
