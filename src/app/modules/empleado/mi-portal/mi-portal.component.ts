import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-mi-portal',
  templateUrl: './mi-portal.component.html',
  styleUrls: ['./mi-portal.component.css']
})
export class MiPortalComponent implements OnInit 
{
  filtrado =
  {
    nombre: "",
    apellido: "",
    comuna: "",
    cargo: "",
    experiencia: "",
    curso: "",
    disponibilidad: "",
    jornada: "",
    sueldo: null
  };

  con=null;
  com=null;
  car=null;
  det=null;

  cargos =
  {
    id: null,
    puesto: null
  }

  comunas =
  {
    id: null,
    nombre: null
  }

  contacto =
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    fono: null,
    comuna: null,
    cargo: null,
    experiencia: null,
    curso: null,
    disponibilidad: null,
    jornada: null,
    sueldo: null,
    curriculum: null,
    mensaje: null
  }

  detalle = 
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    telefono: null,
    curriculum: null,
    mensaje: null
  }

  constructor(private empleado: EmpleadosService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit()
  {
    this.listarPostulantes();
    this.listarComunas();
    this.listarCargos();
  }

  detallePostulante(idPostulante)
  {
    this.empleado.detallePostulanteId(idPostulante).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  listarPostulantes() 
  {
    this.empleado.listarPostulantes().subscribe
    (
      (datos:any) => this.con = datos
    );
  }

  listarComunas()
  {
    this.empleado.listarComunas().subscribe
    (
      (datos:any) => this.com = datos
    );
  }

  listarCargos()
  {
    this.empleado.listarCargos().subscribe
    (
      (datos:any) => this.car = datos
    );
  }

  eliminarPostulante(idPostulante) 
  {
    this.empleado.eliminarPostulante(idPostulante).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 'OK')
        {
          Swal.fire
          ({
            title: '',
            text: 'Postulante Eliminado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
          this.listarPostulantes();
        }
      }
    );
  }
}