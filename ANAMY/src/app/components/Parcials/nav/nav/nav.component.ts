import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from '../../../../Servicios/registro.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {



  constructor(public registroService: RegistroService) { }

  ngOnInit(){

  }

}
