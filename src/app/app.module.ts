import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostulanteModule } from './modules/postulante/postulante.module'; 
import { ContactoModule } from './modules/contacto/contacto.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EmpleadoModule } from './modules/empleado/empleado.module';
import { QuienesSomosComponent } from './modules/nosotros/quienes-somos/quienes-somos.component';
import { NuestraHistoriaComponent } from './modules/nosotros/nuestra-historia/nuestra-historia.component';
import { HaceEspecialesComponent } from './modules/nosotros/hace-especiales/hace-especiales.component';
import { QuienesAvalanComponent } from './modules/nosotros/quienes-avalan/quienes-avalan.component';
import { PantallaInicioComponent } from './modules/Inicio/pantalla-inicio/pantalla-inicio.component';
import { TipoServiciosComponent } from './modules/nuestros-servicios/tipo-servicios/tipo-servicios.component';
import { TipoClientesComponent } from './modules/nuestros-servicios/tipo-clientes/tipo-clientes.component';
import { QueHacemosComponent } from './modules/nuestros-servicios/que-hacemos/que-hacemos.component';
import { ComoHacemosComponent } from './modules/nuestros-servicios/como-hacemos/como-hacemos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    QuienesSomosComponent,
    NuestraHistoriaComponent,
    HaceEspecialesComponent,
    QuienesAvalanComponent,
    PantallaInicioComponent,
    TipoServiciosComponent,
    TipoClientesComponent,
    QueHacemosComponent,
    ComoHacemosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule, 
    PostulanteModule,
    ContactoModule,
    EmpleadoModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
