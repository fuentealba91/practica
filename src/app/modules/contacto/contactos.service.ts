import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  url = 'http://localhost:80/angularPhp/';

  constructor(private http: HttpClient) { }

  subirArchivo(archivo)
  {
    return this.http.post(`${this.url}subirArchivoContacto.php`, JSON.stringify(archivo));
  }

  listarCategoriaProductos()
  {
    return this.http.get(`${this.url}listarCategoriaProductos.php`);
  }

  validarCampos(contacto: any, archivo: any)
  {
    var resultado;

    if(contacto.nombre != null)
    {
      if(contacto.apellido != null)
      {
        if(contacto.correo != null)
        {
          if(contacto.empresa != null)
          {
            if(contacto.cargo != null)
            {
              if(contacto.categoria != null)
              {
                if(contacto.categoria == 'Proveedor')
                {
                  if(contacto.producto != "")
                  {
                    if(contacto.mensaje != null)
                    {
                      resultado = 1;
                    }
                    else
                    {
                      resultado = 0;
                    }
                  }
                  else
                  {
                    resultado = 0;
                  }
                }
                else
                {
                  if(contacto.mensaje != null)
                  {
                    resultado = 1;
                  }
                  else
                  {
                    resultado = 0;
                  }
                }
              }
              else
              {
                resultado = 0;
              }
            }
            else
            {
              resultado = 0;
            }
          }
          else
          {
            resultado = 0;
          }
        }
        else
        {
          resultado = 0;
        }
      }
      else
      {
        resultado = 0;
      }
    }
    else
    {
      resultado = 0;
    }

    return resultado;
  }

  agregarContacto(contacto: any,archivo: any)
  {
    if(archivo == null)
    {
      contacto.nomArch = "";
    }
    else
    {
      contacto.nomArch = archivo.nombreArchivo;
    }
    
    return this.http.post(`${this.url}agregarContacto.php`, JSON.stringify(contacto));
  }

  enviarCorreo(contacto: any)
  {
    return this.http.post(`${this.url}correoContacto.php`, JSON.stringify(contacto));
  }
}