import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../../Servicios/registro.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;

  user = {
    username: '',
    password: ''
  }

  constructor(
    public registroService: RegistroService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registro(){
    this.registroService.registro(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/principal']);
        },
        err => console.log(err)
      )
  }

}
