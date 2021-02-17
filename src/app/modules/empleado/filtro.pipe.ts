import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args: any): any 
  {
    const resultado: string[] = [];

    if(args=="")
    {
      return value;
    }

    for(const campos of value)
    {
      if(campos.nombre.toUpperCase().indexOf(args.toUpperCase()) > -1)
      {
        resultado.push(campos);
      }
    }
    return resultado;
  }
}
