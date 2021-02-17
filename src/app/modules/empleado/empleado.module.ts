import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiPortalComponent } from './mi-portal/mi-portal.component';
import { FilterPipe } from './filter.pipe';
import { BuscarContactoComponent } from './buscar-contacto/buscar-contacto.component';
import { FiltroPipe } from './filtro.pipe';
import { FiltroApePipe } from './filtro-ape.pipe';
import { FiltroProductoPipe } from './filtro-producto.pipe';
import { FiltroCategoriaPipe } from './filtro-categoria.pipe';
import { FiltroEmpresaPipe } from './filtro-empresa.pipe';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule } from '@angular/router';
import { MantenedorDatosComponent } from './mantenedor-datos/mantenedor-datos.component';


@NgModule({
  declarations: [LoginComponent, MiPortalComponent, FilterPipe, BuscarContactoComponent, FiltroPipe, FiltroApePipe, FiltroProductoPipe, FiltroCategoriaPipe, FiltroEmpresaPipe, MenuPrincipalComponent, MantenedorDatosComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:
  [
    LoginComponent,
    BuscarContactoComponent,
    MenuPrincipalComponent
  ]
})
export class EmpleadoModule { }
