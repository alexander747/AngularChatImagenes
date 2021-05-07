import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RutasProtegidasModule } from './pages/rutas-protegidas.module';


const routes:Routes = [
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    RutasProtegidasModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
