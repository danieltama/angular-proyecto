import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caja } from '../Modelos/caja';


@Injectable({
  providedIn: 'root'
})
export class CajaService {

  selectedCaja: Caja;
  cajas: Caja [] = [];
  readonly URL_API = 'http://localhost:3000/api/caja';

  constructor(private http: HttpClient) {
    this.selectedCaja = new Caja();
   }

  getCaja(){
    return this.http.get(this.URL_API);
  }

  postCaja(Caja: Caja){
    return this.http.post(this.URL_API, Caja);
  }

  putCaja(caja: Caja){
    return this.http.put(this.URL_API + `/${caja._id}`, caja, {observe: "response"});
  }

  deleteCaja(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
