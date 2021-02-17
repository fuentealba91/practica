import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContactoComponent } from './modules/contacto/form-contacto/form-contacto.component';
import { AuthguardGuard } from './modules/empleado/authguard.guard';
import { BuscarContactoComponent } from './modules/empleado/buscar-contacto/buscar-contacto.component';
import { LoginComponent } from './modules/empleado/login/login.component';
import { MantenedorDatosComponent } from './modules/empleado/mantenedor-datos/mantenedor-datos.component';
import { MenuPrincipalComponent } from './modules/empleado/menu-principal/menu-principal.component';
import { MiPortalComponent } from './modules/empleado/mi-portal/mi-portal.component';
import { PantallaInicioComponent } from './modules/Inicio/pantalla-inicio/pantalla-inicio.component';
import { HaceEspecialesComponent } from './modules/nosotros/hace-especiales/hace-especiales.component';
import { NuestraHistoriaComponent } from './modules/nosotros/nuestra-historia/nuestra-historia.component';
import { QuienesAvalanComponent } from './modules/nosotros/quienes-avalan/quienes-avalan.component';
import { QuienesSomosComponent } from './modules/nosotros/quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './modules/nuestros-servicios/que-hacemos/que-hacemos.component';
import { TipoClientesComponent } from './modules/nuestros-servicios/tipo-clientes/tipo-clientes.component';
import { FormEmpleoComponent } from './modules/postulante/form-empleo/form-empleo.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PantallaInicioComponent },
  { path: 'contacto', component: FormContactoComponent },
  { path: 'mi-portal', component: MiPortalComponent, canActivate: [AuthguardGuard] },
  { path: 'buscar-contacto', component: BuscarContactoComponent, canActivate: [AuthguardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent, canActivate: [AuthguardGuard] },
  { path: 'mantenedor-datos', component: MantenedorDatosComponent, canActivate: [AuthguardGuard] },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'nuestra-historia', component: NuestraHistoriaComponent },
  { path: 'hace-especiales', component: HaceEspecialesComponent },
  { path: 'quienes-avalan', component: QuienesAvalanComponent },
  { path: 'empleo', component: FormEmpleoComponent },
  { path: 'tipos-clientes', component: TipoClientesComponent },
  { path: 'que-hacemos', component: QueHacemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
