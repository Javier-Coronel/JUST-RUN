import { Component } from '@angular/core';
import {User} from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  submitted = false;
  model= new User("","");
  onSubmit(){this.submitted=true;}
  newPerson(){
    this.model= new User("","");
  };
}
