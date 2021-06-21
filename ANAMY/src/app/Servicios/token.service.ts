import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegistroService } from '../Servicios/registro.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(
    private registroService: RegistroService
  ) { }


  intercept(req :any, next: any){
    const tokenizeReq = req.clone({
      seatHeaders: {
        Authorization: `Bearer ${this.registroService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
