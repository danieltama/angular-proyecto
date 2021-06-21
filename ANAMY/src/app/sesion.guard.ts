import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { RegistroService } from './Servicios/registro.service';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor(
    private registroService: RegistroService,
    private router: Router
    ) {}

  canActivate(): boolean{
    if (this.registroService.loggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
