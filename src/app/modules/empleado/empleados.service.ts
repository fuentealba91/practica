import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService //implements CanActivate
{
  redirectUrl!: string;

  url = 'http://localhost/angularPhp/';
  //url = 'https://pruebacomalim.000webhostapp.com/angularPhp/';
  //url = environment.url;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, public auth: EmpleadosService, public router: Router) { }

  public login(email:any, password:any)
  {
    return this.http.post<any>(this.url+`login.php`,{email,password})
    .pipe(map(Users => 
    {
      this.setToken(Users[0].name);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  modificarEmpleado(ide:number,cor:string,us:string,pass:string,perf:string)
  {
    var empleado = 
    {
      id: ide,
      correo: cor,
      usuario: us,
      clave: pass,
      perfil: perf
    }

    return this.http.post(`${this.url}modificarEmpleado.php`, JSON.stringify(empleado));
  }

  modificarPersona(ide:number,nom:string,ape:string,cor:string,tel:string,men:string,com:string)
  {
    var persona = 
    {
      id: ide,
      nombre: nom,
      apellido: ape,
      correo: cor,
      telefono: tel,
      mensaje: men,
      comuna: com
    }

    return this.http.post(`${this.url}modificarPersona.php`, JSON.stringify(persona));
  }

  modificarRegion(idReg:number,nomReg:string)
  {
    var region = 
    {
      id: idReg,
      nombre: nomReg
    };

    return this.http.post(`${this.url}modificarRegion.php`, JSON.stringify(region));
  }

  modificarComuna(id:number,reg:string,nom:string)
  {
    var comuna=
    {
      id: id,
      region: reg,
      nombre: nom
    }

    return this.http.post(`${this.url}modificarComuna.php`, JSON.stringify(comuna));
  }

  modificarProducto(id:number,categoria:string)
  {
    var producto =
    {
      id: id,
      categoria: categoria
    }

    return this.http.post(`${this.url}modificarProducto.php`, JSON.stringify(producto));
  }

  modificarCargo(id:number,puesto:string)
  {
    var cargo = 
    {
      id: id,
      puesto: puesto
    }

    return this.http.post(`${this.url}modificarCargo.php`, JSON.stringify(cargo));
  }

  agregarEmpleado(trabajador:any)
  {
    return this.http.post(`${this.url}agregarEmpleado.php`, JSON.stringify(trabajador));
  }

  agregarCargo(cargo:any)
  {
    return this.http.post(`${this.url}agregarCargo.php`, JSON.stringify(cargo));
  }

  agregarComuna(comuna:any)
  {
    return this.http.post(`${this.url}agregarComuna.php`, JSON.stringify(comuna));
  }

  agregarProducto(producto:any)
  {
    return this.http.post(`${this.url}agregarProducto.php`, JSON.stringify(producto));
  }

  agregarRegion(region:any)
  {
    return this.http.post(`${this.url}agregarRegion.php`, JSON.stringify(region));
  }

  agregarPersona(persona:any)
  {
    return this.http.post(`${this.url}agregarPersona.php`, JSON.stringify(persona));
  }
  
  listarPersonas()
  {
    return this.http.get(`${this.url}listarPersonas.php`);
  }

  listarEmpleados()
  {
    return this.http.get(`${this.url}listarEmpleados.php`);
  }

  listarRegiones()
  {
    return this.http.get(`${this.url}listarRegiones.php`);
  }

  listarCategoriaProductos()
  {
    return this.http.get(`${this.url}listarCategoriaProductos.php`);
  }

  detalleEmpleado(iden:number)
  {
    return this.http.get(`${this.url}detalleEmpleado.php?id=${iden}`);
  }

  detalleCargo(iden:number)
  {
    return this.http.get(`${this.url}detalleCargo.php?id=${iden}`);
  }

  detalleComuna(iden:number)
  {
    return this.http.get(`${this.url}detalleComuna.php?id=${iden}`);
  }

  detalleRegion(iden: number)
  {
    return this.http.get(`${this.url}detalleRegion.php?id=${iden}`);
  }

  detalleProducto(iden: number)
  {
    return this.http.get(`${this.url}detalleProducto.php?id=${iden}`);
  }

  detallePersona(idPersona: number)
  {
    return this.http.get(`${this.url}detallePersona.php?id=${idPersona}`);
  }

  detalleContactoId(idContacto: number)
  {
    return this.http.get(`${this.url}detalleContacto.php?id=${idContacto}`);
  }

  detallePostulanteId(idPostulante: number)
  {
    return this.http.get(`${this.url}detallePostulante.php?id=${idPostulante}`);
  }

  eliminarCargo(idCargo:number)
  {
    return this.http.get(`${this.url}eliminarCargo.php?id=${idCargo}`);
  }

  eliminarEmpleado(idEmpleado:number)
  {
    return this.http.get(`${this.url}eliminarEmpleado.php?id=${idEmpleado}`);
  }

  eliminarComuna(idComuna:number)
  {
    return this.http.get(`${this.url}eliminarComuna.php?id=${idComuna}`);
  }

  eliminarPersona(idPersona: number)
  {
    return this.http.get(`${this.url}eliminarPersona.php?id=${idPersona}`);
  }

  eliminarRegion(idRegion: number)
  {
    return this.http.get(`${this.url}eliminarRegion.php?id=${idRegion}`);
  }

  eliminarProducto(idProducto: number)
  {
    return this.http.get(`${this.url}eliminarProducto.php?id=${idProducto}`);
  }

  eliminarContacto(idContacto: number)
  {
    return this.http.get(`${this.url}eliminarContacto.php?id=${idContacto}`);
  }
  
  eliminarPostulante(idPostulante: number)
  {
    return this.http.get(`${this.url}eliminarPostulante.php?id=${idPostulante}`);
  }

  listarPostulantes() 
  {
    return this.http.get(`${this.url}listarPostulantes.php`);
  }

  listarContactos() 
  {
    return this.http.get(`${this.url}listarContactos.php`);
  }

  listarComunas()
  {
    return this.http.get(`${this.url}listarComunas.php`);
  }

  listarCargos()
  {
    return this.http.get(`${this.url}listarCargos.php`);
  }

  setToken(token: string) 
  {
    localStorage.setItem('token', token);
  }

  getToken() 
  {
    return localStorage.getItem('token');
  }

  deleteToken() 
  {
    localStorage.removeItem('token');
  }

  isLoggedIn() 
  {
    const usertoken = this.getToken();
    if (usertoken != null) 
    {
      return true;
    }
    return false;
  }
}