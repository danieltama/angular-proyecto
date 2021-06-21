import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/Principal/principal/principal.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas/ventas.component';
import { CajaComponent } from './components//caja/caja/caja.component';
import { RegistroComponent } from './components/registrar/registro/registro.component';
import { RegistrosComponent } from './components/registros/registros/registros.component'
import { SesionGuard } from './sesion.guard'

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'registros', component: RegistrosComponent, canActivate: [SesionGuard]},
  {path: 'principal', component: PrincipalComponent, canActivate: [SesionGuard]},
  {path:'bienvenido', component: BienvenidoComponent, canActivate: [SesionGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [SesionGuard]},
  {path: 'Ventas', component: VentasComponent, canActivate: [SesionGuard]},
  {path: 'caja', component: CajaComponent, canActivate: [SesionGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
