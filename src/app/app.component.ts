import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title = 'app-banco';
  cliente: any = null;


    constructor(private clienteService: ClienteService){
  
  
    }

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();
  }

}
