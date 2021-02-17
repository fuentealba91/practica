import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostulantesService } from '../postulantes.service';
import swal from'sweetalert2';

declare var $ :any;

@Component({
  selector: 'app-form-empleo',
  templateUrl: './form-empleo.component.html',
  styleUrls: ['./form-empleo.component.css']
})
export class FormEmpleoComponent implements OnInit {

  resultado = null;

  postulante = null;
  com = null;
  car = null;

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

  pos = 
  {
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
    mensaje: null,
    terminos: null
  };

  archivo = 
  {
    nombre: null,
    nombreArchivo: null,
    base64textString: null
  }

  constructor(private postulantesServicio: PostulantesService, private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void
  {
    this.listarComunas();
    this.listarCargos();

    $(document).ready(function () 
    {
      $('#fono')
        .keypress(function (event) 
        {
          if (event.which < 48 || event.which > 57) 
          {
            return false;
          }
          else
          {
            return true;
          }
        });
    });

    $(document).ready(function () 
    {
      $('#sueldo')
        .keypress(function (event) 
        {
          if (event.which < 48 || event.which > 57) 
          {
            return false;
          }
          else
          {
            return true;
          }
        });
    });
  }
  
  listarComunas()
  {
    this.postulantesServicio.listarComunas().subscribe
    (
      (datos:any) => this.com = datos
    );
  }

  listarCargos()
  {
    this.postulantesServicio.listarCargos().subscribe
    (
      (datos:any) => this.car = datos
    );
  }

  seleccionarArchivo(event:any) 
  {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;
  }

  Agregar()
  {
    if(this.postulantesServicio.validarCampos(this.pos)==1)
    {
      if(this.archivo.nombreArchivo!=null)
      {
        this.postulantesServicio.subirArchivo(this.archivo).subscribe(
          datos =>
          {
            if(datos==1)
            {
              this.postulantesServicio.agregar(this.pos).subscribe(
                datos =>
                {
                  if(datos==1)
                  {
                    swal.fire
                    ({
                      title: '',
                      text: 'Solicitud Enviada',
                      icon: 'success',
                      confirmButtonText: 'Aceptar',
                      showConfirmButton: false,
                      //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
                    })
                    location.reload();
                  }
                }
              );
            }
            else
            {
              swal.fire
              ({
                title: '',
                text: 'No se pudo subir el archivo',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
              location.reload();
            }
          }
        );
      }
      else
      {
        this.postulantesServicio.agregar(this.pos).subscribe(
          datos =>
          {
            if(datos==1)
            {
              swal.fire
              ({
                title: '',
                text: 'Solicitud Enviada',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
              location.reload();
            }
          }
        );
      }
    }
    else
    {
      swal.fire
      ({
        title: '',
        text: 'Debe llenar todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        showConfirmButton: false,
        //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
      })
    }
  }
}
