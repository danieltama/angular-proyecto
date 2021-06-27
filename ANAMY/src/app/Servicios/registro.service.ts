import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Usuarios } from '../Modelos/usuarios';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  usuarios : Usuarios[] = [];

  private URL = 'http://34.226.54.145:3000/api'

  private Url_auri = 'http://34.226.54.145:3000/api/users'

  constructor(private http: HttpClient,
    private router: Router
    ) {

    }

  getUsuario(){
    return this.http.get(this.URL + '/users');
  }

  postUsuario(){
    return this.http.post(this.URL, '/users');
  }

  public putUsuario(id: String, usuario: Usuarios){
    return this.http.put<boolean>("http://34.226.54.145:3000/api/users/" + id, usuario,{ observe: "response"});
  }

  public deleteUsuario(usuario_id: any){
    return this.http.delete(this.URL + '/users/' +usuario_id);
  }

  registro(user: any){
    return this.http.post<any>(this.URL + '/registro', user);
  }

  sesion(user: any){
    return this.http.post<any>(this.URL + '/sesion', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }



}
