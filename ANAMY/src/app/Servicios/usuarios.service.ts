import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuarios } from '../Modelos/usuarios'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any;
  readonly URL_API = 'http://localhost:3000/api/';


  constructor(private http: HttpClient) { }



}
