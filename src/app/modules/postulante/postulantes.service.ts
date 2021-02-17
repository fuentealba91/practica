import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostulantesService {

  url = 'http://localhost:80/angularPhp/';

  constructor(private http: HttpClient) { }

  validarCampos(postulante: any)
  {
    var resultado;

    if(postulante.nombre != null)
    {
      if(postulante.apellido != null)
      {
        if(postulante.fono != null)
        {
          if(postulante.comuna != null)
          {
            if(postulante.cargo != null)
            {
              if(postulante.curso != null)
              {
                if(postulante.disponibilidad != null)
                {
                  if(postulante.jornada != null)
                  {
                    if(postulante.sueldo != null)
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
    }
    else
    {
      resultado = 0;
    }
    return resultado;
  }

  subirArchivo(archivo: any)
  {
    return this.http.post(`${this.url}subirArchivo.php`, JSON.stringify(archivo));
  }

  agregar(postulante: any)
  {
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(postulante));
  }

  listarComunas()
  {
    return this.http.get(`${this.url}listarComunas.php`);
  }

  listarCargos()
  {
    return this.http.get(`${this.url}listarCargos.php`);
  }
}
