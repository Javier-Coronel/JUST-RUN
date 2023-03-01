import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { RegistroUsuariosAnonimoComponent } from './registro-usuarios-anonimo/registro-usuarios-anonimo.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuariosAnonimoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
  ]
})
export class ModulesModule { }
