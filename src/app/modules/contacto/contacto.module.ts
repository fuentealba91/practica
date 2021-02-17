import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactosService } from './contactos.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { MatIconModule } from "@angular/material/icon"; 

@NgModule({
  declarations: [FormContactoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    ContactosService
  ],
  exports: [
    FormContactoComponent
  ]
})
export class ContactoModule { }
