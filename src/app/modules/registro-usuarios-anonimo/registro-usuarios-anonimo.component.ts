import { Component } from '@angular/core';
import { Person } from './registration.model';

@Component({
  selector: 'app-registro-usuarios-anonimo',
  templateUrl: './registro-usuarios-anonimo.component.html',
  styleUrls: ['./registro-usuarios-anonimo.component.scss']
})
export class RegistroUsuariosAnonimoComponent {
  Tallas=['XS','S','M','L','XL'];
  Metodos=['Tarjeta','Paypal','Transferencia']
  submitted=false;
  model= new Person(1,"","","","","","","");
  onSubmit(){this.submitted=true;}
}
