import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../Servicios/registro.service'
import { MatIconModule} from'@angular/material/icon'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  user = {
    username: '',
    password: ''
  }

  public loginForm = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)]))
  });

  constructor(
    private registroService: RegistroService,
    private router:Router) { }

  ngOnInit() {
  }


public iniciarSesion (){
  this.registroService.sesion(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/principal']);
        alert("Usuario Encontrado")

      },
      err => {
        console.log(err)
        alert("Usuario No Encontrado")
      }

    )



}

}

