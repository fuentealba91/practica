import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { empty } from 'rxjs';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../empleados.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Users } from '../users';

declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado = null;

  emp =
  {
    usuario: null,
    clave: null
  };

  contacto!: FormGroup;
  submitted = false;
      
  contacto2 = 
  {
    idPersona: null,
    usuario: null,
    clave: null
  }

  constructor(private empleadosService: EmpleadosService, private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit()
  {
    this.contacto = this.formBuilder.group
    ({   
      usuario: ['', [Validators.required]],
      clave: ['', Validators.required]
    });
  }

  get f() { return this.contacto.controls; }

  IniciarSesion() 
  { //funcion de formulario iniciar seccion
    this.submitted = true;
    
    if((this.contacto2.usuario == null) || (this.contacto2.clave == null))
    {
      Swal.fire
      ({
        title: '',
        text: 'Debe llenar todos los campos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        showConfirmButton: false,
      })
      return;
    }
    if (this.contacto.invalid) 
    {
      console.log(this.contacto2); 
      Swal.fire
      ({
        title: '',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        showConfirmButton: false,
      })
      return;
    }
      
    this.Ingresar(this.contacto);
  }

  Ingresar(contacto:any)
  {
    this.empleadosService.login(contacto.value.usuario,contacto.value.clave)
    .pipe(first())
    .subscribe(
      data =>
      {
        const redirect = this.empleadosService.redirectUrl ? this.empleadosService.redirectUrl : '/menu-principal';
        this.router.navigate([redirect]);
      },
      error =>
      {
        Swal.fire
        ({
          title: '',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          showConfirmButton: false,
        })
      }
    )
  }
}
