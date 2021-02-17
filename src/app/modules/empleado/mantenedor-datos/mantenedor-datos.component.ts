import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../empleados.service';
import { Users } from '../users';

declare var $ :any;

@Component({
  selector: 'app-mantenedor-datos',
  templateUrl: './mantenedor-datos.component.html',
  styleUrls: ['./mantenedor-datos.component.css']
})
export class MantenedorDatosComponent implements OnInit {

  reg = null;
  com = null;
  pro = null;
  det = null;
  car = null;
  emp = null;
  per = null;

  persona = 
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    telefono: null,
    mensaje: null,
    fecha: null,
    comuna: null
  }

  trabajador = 
  {
    id: null,
    nombre: null,
    apellido: null,
    correo: null,
    usuario: null,
    clave: null,
    perfil: null
  }

  producto = 
  {
    id: null,
    categoria: null
  }

  region = 
  {
    id: null,
    nombre: null
  }

  comuna =
  {
    id: null,
    region: null,
    nombre: null
  }

  cargo = 
  {
    id: null,
    puesto: null
  }

  constructor(private empleado: EmpleadosService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void 
  {

  }

  //PERSONA//
  listarPersonas()
  {
    this.empleado.listarPersonas().subscribe
    (
      (datos:any) => this.per = datos
    );
  }

  detallePersona()
  {
    $("#modalPersona").modal('show');
    this.listarComunas();
    this.listarPersonas();
  }

  detallePersonaId(iden)
  {
    this.empleado.detallePersona(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarPersona()
  {
    this.empleado.agregarPersona(this.persona).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona Agregada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona No Agregada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
        }
      }
    );
  }

  eliminarPersona(idPer)
  {
    this.empleado.eliminarPersona(idPer).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona Eliminada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona No Eliminada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  modificarPersona()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("iden")).value);
    var nom = (<HTMLInputElement>document.getElementById("nombre")).value;
    var ape = (<HTMLInputElement>document.getElementById("ape")).value;
    var cor = (<HTMLInputElement>document.getElementById("cor")).value;
    var tel = (<HTMLInputElement>document.getElementById("tel")).value;
    var men = (<HTMLInputElement>document.getElementById("men")).value;
    var comun = (<HTMLInputElement>document.getElementById("comun")).value;

    this.empleado.modificarPersona(ide,nom,ape,cor,tel,men,comun).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona Modificada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Persona No Modificada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //PERSONA//

  //EMPLEADO//
  listarEmpleados()
  {
    this.empleado.listarEmpleados().subscribe
    (
      (datos:any) => this.emp = datos
    );
  }

  detalleEmpleado()
  {
    $("#modalEmpleado").modal('show');
    this.listarEmpleados();
    this.listarPersonas();
  }

  detalleEmpleadoId(iden)
  {
    this.empleado.detalleEmpleado(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarTrabajador()
  {
    this.empleado.agregarEmpleado(this.trabajador).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado Agregado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado No Agregado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
        }
      }
    );
  }

  eliminarEmpleado(idEmp)
  {
    this.empleado.eliminarEmpleado(idEmp).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado Eliminado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado No Eliminado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  modificarEmpleado()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("id1")).value);
    var cor = (<HTMLInputElement>document.getElementById("corr")).value;
    var us = (<HTMLInputElement>document.getElementById("us")).value;
    var pass = (<HTMLInputElement>document.getElementById("cl")).value;
    var perf = (<HTMLInputElement>document.getElementById("perf")).value;

    this.empleado.modificarEmpleado(ide,cor,us,pass,perf).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado Modificado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Empleado No Modificado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //EMPLEADO//
 
  //CARGO//
  listarCargos()
  {
    this.empleado.listarCargos().subscribe
    (
      (datos:any) => this.car = datos
    );
  }

  detalleCargo()
  {
       $("#modalCargo").modal('show');
       this.listarCargos();
  }

  detalleCargoId(iden)
  {
    this.empleado.detalleCargo(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarCargo()
  {
    this.empleado.agregarCargo(this.cargo).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo Agregado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo No Agregado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
        }
      }
    );
  }

  eliminarCargo(idCar)
  {
    this.empleado.eliminarCargo(idCar).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo Eliminado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo No Eliminado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  modificarCargo()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("ident")).value);
    var nom = (<HTMLInputElement>document.getElementById("nombr")).value;

    this.empleado.modificarCargo(ide,nom).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo Modificado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Cargo No Modificado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //CARGO//

  //REGION//
  listarRegiones()
  {
    this.empleado.listarRegiones().subscribe
    (
      (datos:any) => this.reg = datos
    );
  }

  detalleRegion()
  {
       $("#modalRegion").modal('show');
       this.listarRegiones();
  }

  detalleRegionId(iden)
  {
    this.empleado.detalleRegion(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarRegion()
  {
    this.empleado.agregarRegion(this.region).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Región Agregada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Región No Agregada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
            //footer: '<a href=inicio><button class="btn" style="border-color:green">Aceptar</button></a>'
          })
        }
      }
    );
  }

  eliminarRegion(idReg)
  {
    this.empleado.eliminarRegion(idReg).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Región Eliminada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Región no Eliminada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  modificarRegion()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("ide")).value);
    var nom = (<HTMLInputElement>document.getElementById("nom")).value;

    this.empleado.modificarRegion(ide,nom).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Región Modificada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Región No Modificada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //REGION//

  //COMUNA//
  listarComunas()
  {
    this.empleado.listarComunas().subscribe
    (
      (datos:any) => this.com = datos
    );
  }

  detalleComuna()
  {
    $("#modalComuna").modal('show');
    this.listarRegiones();
    this.listarComunas();
  }

  detalleComunaId(iden)
  {
    this.empleado.detalleComuna(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarComuna()
  {
    this.empleado.agregarComuna(this.comuna).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Comuna Agregada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Comuna No Agregada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false
          })
        }
      }
    );
  }

  modificarComuna()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("iden")).value);
    var reg = (<HTMLInputElement>document.getElementById("regi")).value;
    var nom = (<HTMLInputElement>document.getElementById("nomb")).value;

    this.empleado.modificarComuna(ide,reg,nom).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Región Modificada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Región No Modificada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  eliminarComuna(idCom)
  {
    this.empleado.eliminarComuna(idCom).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Comuna Eliminada',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Comuna no Eliminada',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //COMUNA//

  //PRODUCTO//
  listarProductos()
  {
    this.empleado.listarCategoriaProductos().subscribe
    (
      (datos:any) => this.pro = datos
    );
  }

  detalleProducto()
  {
    $('#modalProducto').modal('show');
    this.listarProductos();
  }

  detalleProductoId(iden)
  {
    this.empleado.detalleProducto(iden).subscribe
    (
      (datos:any) => this.det = datos
    );
  }

  agregarProducto()
  {
    this.empleado.agregarProducto(this.producto).subscribe
    (
      datos =>
      {
        if(datos == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto Agregado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
          })
          location.reload();
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto No Agregado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: false,
          })
        }
      }
    );
  }

  modificarProducto()
  {
    var ide: number = parseInt((<HTMLInputElement>document.getElementById("id")).value);
    var nom = (<HTMLInputElement>document.getElementById("no")).value;

    this.empleado.modificarProducto(ide,nom).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto Modificado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto No Modificado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }

  eliminarProducto(idProd)
  {
    this.empleado.eliminarProducto(idProd).subscribe
    (
      datos =>
      {
        if (datos['resultado'] == 1)
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto Eliminado',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
        else
        {
          Swal.fire
          ({
            title: '',
            text: 'Producto No Eliminado',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true
          })
        }
      }
    );
  }
  //PRODUCTO//
}