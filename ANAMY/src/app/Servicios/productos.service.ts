import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Productos } from '../Modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  selectedProducto: Productos;
  productos: Productos[] = [];
  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {
    this.selectedProducto = new Productos();
  }

  getProductos(){
    return this.http.get(this.URL_API);
  }

  postProducto(producto: Productos){
    return this.http.post(this.URL_API, producto);
  }

  putProducto(producto: Productos){
    return this.http.put(this.URL_API + `/${producto._id}`, producto, {observe: "response"});
  }

  deleteProducto(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
