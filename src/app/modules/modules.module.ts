import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { RegistroUsuariosAnonimoComponent } from './registro-usuarios-anonimo/registro-usuarios-anonimo.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { EventCardComponent } from './event-card/event-card.component';




@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuariosAnonimoComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule
    
  ],
  exports: [
  ]
})
export class ModulesModule { }
