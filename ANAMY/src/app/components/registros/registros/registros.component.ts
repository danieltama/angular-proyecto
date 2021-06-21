import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { RegistroService } from '../../../Servicios/registro.service';
import { Usuarios } from '../../../Modelos/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  public editUsuarioForm = new FormGroup({
    _id: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });


  public usuarios : Usuarios[] = [];

  constructor(public registroService: RegistroService, private router:Router) { }



  user = {
    username: '',
    password: ''
  }
  usuario: any =[];
  forUpdate: any =[];

  ngOnInit(): void {
    this.getUsuario();
    this.registroService.getUsuario().subscribe
    (res => {
      this.usuario = res;
    })
  }


  public getUsuario(){
    this.registroService.getUsuario()
    .subscribe(res => {
        this.registroService.usuarios = res as Usuarios[];
        console.log(res);
      });
  }

  public obtenerDato(usuario: Usuarios){
    this.forUpdate = usuario;
    console.log(usuario);
  }

  public editUsuario(form: Usuarios){
    var username = this.forUpdate.usuario;
    console.log(form);
    console.log(username);

    this.registroService.putUsuario(username, form).subscribe(
      res => {
        console.log("result: ", res);
      }
    );
    location.reload();
  }

  public eliminarUsuario(_id: String){
    if(confirm('¿Estas Seguro de Querer Eliminarlo?')) {
      this.registroService.deleteUsuario(_id)
      .subscribe(res => {
        console.log("result: ", res);
      }
      );
      location.reload();
    }
  }

}
