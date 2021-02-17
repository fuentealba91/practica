import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform 
{
  transform(value: any, arg: any): any
  {
    const resultado: string[] = [];

    if(arg.comuna==="")
    {
      if(arg.cargo==="")
      {
        if(arg.experiencia==="")
        {
          if(arg.curso==="")
          {
            if(arg.disponibilidad==="")
            {
              if(arg.jornada==="")
              {
                if(arg.sueldo === null)
                {
                  return value;
                }
              }
            }
          }
        }
      }
    }

      for(const campos of value)
      {
        if(campos.comuna.indexOf(arg.comuna) > -1)
        {
          if(campos.cargo.indexOf(arg.cargo) > -1)
          {
            if(campos.experiencia.indexOf(arg.experiencia) > -1)
            {
              if(campos.curso.indexOf(arg.curso) > -1)
              {
                if(campos.disponibilidad.indexOf(arg.disponibilidad) > -1)
                {
                  if(campos.jornada.indexOf(arg.jornada) > -1)
                  {
                    if(campos.sueldo <= arg.sueldo)
                    {
                      resultado.push(campos);
                    }
                  }
                }
              }
            }
          }
        }
      }
      return resultado;
  }
}
