import { Injectable, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private injector:Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthService)
    console.log(authService.getToken());
    let tokenizedReq=request.clone(
   {
    setHeaders: {
        'Authorization': `Bearer ${authService.getToken()}`
    }
   })
   return next.handle(tokenizedReq);
}

}
