import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../empleados.service';

declare var $ :any;

@Component({
  selector: 'app-buscar-contacto',
  templateUrl: './buscar-contacto.component.html',
  styleUrls: ['./buscar-contacto.component.css']
})
export class BuscarContactoComponent implements OnInit {

  con = null;
  det = null;
  cat = null;

  catProductos = 
  {
    id: null,
    categoria: null,
  }

  filtrado = 
  {
    id: "",
    nombre: "",
    apellido: "",
    empresa: "",
    categoria: "",
    producto: ""
  }

  detalle = 
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    fono: null,
    empresa: null,
    cargo: null,
    categoria: null,
    producto: null,
    catalogo: null,
    mensaje: null,
    fecha: null
  }

  contacto =
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    fono: null,
    empresa: null,
    cargo: null,
    categoria: null,
    producto: null,
    catalogo: null,
    mensaje: null,
    fecha: null
  }

  constructor(private empleado: EmpleadosService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.listarContactos();
    this.listarCategoriaProducto();
  }

  recargar()
  {
    location.reload();
  }

  listarCategoriaProducto()
  {
    this.empleado.listarCategoriaProductos().subscribe
    (
      (datos:any) => this.cat = datos
    );
  }

  listarContactos() 
  {
    this.empleado.listarContactos().subscribe
    (
      (datos:any) => this.con = datos
    );
  }

  detalleContacto(idContacto)
  {
    this.empleado.detalleContactoId(idContacto).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  eliminarContacto(idContacto) 
  {
    this.empleado.eliminarContacto(idContacto).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 'OK')
        {
          Swal.fire
          ({
            title: '',
            text: 'Contacto Eliminado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
          this.listarContactos();
        }
      }
    );
  }
}
