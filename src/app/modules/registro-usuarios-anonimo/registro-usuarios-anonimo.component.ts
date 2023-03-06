import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios-anonimo',
  templateUrl: './registro-usuarios-anonimo.component.html',
  styleUrls: ['./registro-usuarios-anonimo.component.scss']
})
export class RegistroUsuariosAnonimoComponent {
  Tallas=['XS','S','M','L','XL'];
  Metodos=['Tarjeta','Paypal','Transferencia']
  submitted=false;
  onSubmit(){this.submitted=true;}
}
