import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../../Servicios/productos.service'
import { NgForm } from '@angular/forms';
import { Productos } from 'src/app/Modelos/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {
  producto : any = [];

  constructor(public productoService: ProductosService) { }

  ngOnInit() {
    this.getProducto();
    this.productoService.getProductos().subscribe
      (res => {
        this.producto = res;
      });
  }

  addProducto(form: NgForm) {
    if(form.value._id) {
      this.productoService.putProducto(form.value)
        .subscribe(res => console.log(res),
          err => console.error(err)
        )
    } else {
      this.productoService.postProducto(form.value)
      .subscribe(res => {
        this.clearForm(form);
        this.getProducto();
      },
      (err) => console.log(err)
      );
    }
  }

  getProducto() {
    this.productoService.getProductos()
      .subscribe(res => {
        this.productoService.productos = res as Productos[];
        console.log(res);
      });
  }

  editProducto(producto: Productos){
    this.productoService.putProducto(producto);
    this.productoService.selectedProducto = producto;
  }

  deleteProducto(_id: string){
    if(confirm('¿Estas Seguro de Querer Eliminarlo?')) {
      this.productoService.deleteProducto(_id)
      .subscribe(res => {
        this.getProducto();
      });

    }
  }

  clearForm(form?: NgForm){
    if (form) {
      form.reset();
      this.productoService.selectedProducto = new Productos();
    }
  }
}
