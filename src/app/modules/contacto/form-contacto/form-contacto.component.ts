import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactosService } from '../contactos.service';
import {FormControl, FormGroupDirective, NgForm, Validators,ReactiveFormsModule} from '@angular/forms';

declare var $ :any;

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit 
{
  contacto = null;
  cat = null;

  catProductos = 
  {
    id: null,
    categoria: null
  }

  archivo = 
  {
    nombre: "",
    nombreArchivo: "",
    base64textString: ""
  }

  cont = 
  {
    nombre: null,
    apellido: null,
    correo: null,
    fono: null,
    empresa: null,
    cargo: null,
    categoria: null,
    producto: null,
    nomArch: null,
    mensaje: null,
    comuna: null
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private contactosService: ContactosService, private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void
  {
    this.listarCategoriaProducto();

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
  }

  seleccionarArchivo(event) 
  {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if(files && file) 
    {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent) 
  {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
  }

  subirArchivo()
  {
    this.contactosService.subirArchivo(this.archivo).subscribe
    (
      datos =>
      {
        if (datos==1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Solicitud Enviada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Error al subir el Archivo',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
        }
      }
    );
  }

  listarCategoriaProducto()
  {
    this.contactosService.listarCategoriaProductos().subscribe
    (
      (datos:any) => this.cat = datos
    );
  }

  Enviar()
  {
    console.log(this.cont);
    if(this.contactosService.validarCampos(this.cont,this.archivo)==1)
    {
      if(this.cont.categoria == "Cliente")
      {
        this.contactosService.agregarContacto(this.cont,null).subscribe
        (
          datos =>
          {
            if(datos == 1)
            {
              Swal.fire
              ({
                title: '',
                text: 'Solicitud enviada',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
              //location.reload();
            }
            else
            {
              Swal.fire
              ({
                title: '',
                text: 'Error 1',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
            }
          }
        );
      }
      else
      {
        this.subirArchivo();
        this.contactosService.agregarContacto(this.cont,this.archivo).subscribe
        (
          datos =>
          {
            if(datos==1)
            {
              Swal.fire
              ({
                title: '',
                text: 'Solicitud enviada',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
              //location.reload();
            }
            else
            {
              Swal.fire
              ({
                title: '',
                text: 'Error 2',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                showConfirmButton: false,
                //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
              })
            }
          }
        );
      }
    }
    else
    {
      Swal.fire
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
