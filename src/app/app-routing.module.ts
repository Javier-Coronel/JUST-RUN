import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { LoginComponent } from './modules/login/login.component';
import { RegistroUsuariosAnonimoComponent } from './modules/registro-usuarios-anonimo/registro-usuarios-anonimo.component';

const routes: Routes = [
  {
    path:'',
    component: SkeletonComponent,
    pathMatch: 'prefix',
    children:[
      { path: '', component: HomeComponent },
      { path: 'register', component: RegistrationComponent },
      {path: 'login', component: LoginComponent },
      {path: 'registerAnUser', component: RegistroUsuariosAnonimoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
