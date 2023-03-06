import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  sizes = ['XS','S','M','L','XL'];
  Metodos=['Tarjeta','Paypal','Transferencia']
  submitted = false;
  model= new Person(2,"","","","","","","","");
  onSubmit(){this.submitted=true;}
  newPerson(){
    this.model= new Person(2,"","","","","","","","");
  };
}
