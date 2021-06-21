import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../../Servicios/ventas.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Ventas } from 'src/app/Modelos/ventas'
import { ProductosService } from '../../../Servicios/productos.service'


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [VentasService]
})
export class VentasComponent implements OnInit {

  Monto: any;
  Precio: any;
  Cambio: any;

  cantida: any;
  preci: any;
  tot: any;

  constructor(public ventaService: VentasService, public productoService: ProductosService) {

   }

  ngOnInit() {
    this.getVenta();
  }


  addVenta(form: NgForm) {
    if(form.value._id) {
      this.ventaService.putVenta(form.value)
        .subscribe(res => console.log(res),
          err => console.error(err)
        )
    } else {
      this.ventaService.postVenta(form.value)
      .subscribe(res => {
        this.clearForm(form);
        this.getVenta();
      },
      (err) => console.log(err)
      );
    }
  }

  getVenta() {
    this.ventaService.getVenta()
      .subscribe(res => {
        this.ventaService.ventas = res as Ventas[];
        console.log(res);
      });
  }

  editVenta(venta: Ventas){
    this.ventaService.putVenta(venta);
    this.ventaService.selectedVenta = venta;
  }

  deleteVenta(_id: string){
    if(confirm('¿Estas Seguro de Querer Eliminarlo?')) {
      this.ventaService.deleteVenta(_id)
      .subscribe(res => {
        this.getVenta();
      });

    }
  }

  clearForm(form?: NgForm){
    if (form) {
      form.reset();
      this.ventaService.selectedVenta = new Ventas();
    }
  }

  cobrarVenta(){
      this.Cambio = this.Monto - this.Precio
    }

  multiplicarProducto(){
    this.tot = this.cantida * this.preci
  }

  Cleadventa(){
    this.Cambio = '',
    this.Monto = '',
    this.Precio = '';
  }

  limpliar(){
    this.tot = '',
    this.cantida = '',
    this.preci = ''
  }



}
