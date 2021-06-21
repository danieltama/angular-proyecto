import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Ventas } from '../Modelos/ventas';


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  selectedVenta : Ventas;
  ventas : Ventas[] = [];
  readonly URL_API = 'http://localhost:3000/api/ventas';

  constructor(private http: HttpClient) {
    this.selectedVenta = new Ventas();
  }

   getVenta(){
    return this.http.get(this.URL_API);
   }

   postVenta(Ventas: Ventas){
    return this.http.post(this.URL_API, Ventas);
  }

  putVenta(venta: Ventas){
    return this.http.put(this.URL_API + `/${venta._id}`, venta ,{observe: "response"});
  }

  deleteVenta(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
