import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEmpleoComponent } from './form-empleo/form-empleo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PostulantesService } from './postulantes.service';

@NgModule({
  declarations: [FormEmpleoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    PostulantesService
  ],
  exports: [
    FormEmpleoComponent
  ]
})
export class PostulanteModule { }
