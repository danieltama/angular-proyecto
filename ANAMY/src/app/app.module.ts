import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './components/Principal/principal/principal.component';
import { FooterComponent } from './components/Parcials/footer/footer/footer.component';
import { NavComponent } from './components/Parcials/nav/nav/nav.component';
import { ProductosComponent } from './components/productos/productos/productos.component';
import { EditProductosComponent } from './components/productos/productos/edit-productos/edit-productos/edit-productos.component';
import { VentasComponent } from './components/ventas/ventas/ventas.component';
import { CajaComponent } from './components/caja/caja/caja.component';
import { RegistroComponent } from './components/registrar/registro/registro.component';


import { SesionGuard } from './sesion.guard';
import { TokenService } from './Servicios/token.service';
import { RegistrosComponent } from './components/registros/registros/registros.component';
import { PipeProductoPipe } from './components/Pipes/productos.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    PrincipalComponent,
    FooterComponent,
    NavComponent,
    ProductosComponent,
    LoginComponent,
    VentasComponent,
    EditProductosComponent,
    CajaComponent,
    RegistroComponent,
    RegistrosComponent,
    PipeProductoPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [
    SesionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
