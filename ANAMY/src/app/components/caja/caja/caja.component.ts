import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Caja } from 'src/app/Modelos/caja';

import { CajaService } from 'src/app/Servicios/caja.service'

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css'],
  providers: [CajaService]
})
export class CajaComponent implements OnInit {

  constructor(public cajaService: CajaService) { }

  ngOnInit(): void {
    this.getCaja();
  }

  addCaja(form: NgForm){
    if(form.value._id) {
      this.cajaService.putCaja(form.value)
        .subscribe(res => console.log(res),
          err => console.error(err)
        )
    } else {
      this.cajaService.postCaja(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getCaja();
    },
    (err) => console.log(err)
    );
  }
}

  getCaja(){
    this.cajaService.getCaja()
      .subscribe(res => {
        this.cajaService.cajas = res as Caja[];
        console.log(res);
      })
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.cajaService.selectedCaja = new Caja();
    }
  }

  editCaja(caja: Caja){
    this.cajaService.putCaja(caja);
    this.cajaService.selectedCaja = caja;
  }

  deleteCaja(_id: string){
    if(confirm('¿Estas Seguro de Querer Eliminarlo?')) {
      this.cajaService.deleteCaja(_id)
      .subscribe(res => {
        this.getCaja();
      });

    }
  }
}
