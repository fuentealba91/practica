import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(value: any, args: any): any 
  {
    const resultado: string[] = [];

    if(args=="") return value;

    for(const campos of value)
    {
      if(campos.producto.toUpperCase().indexOf(args.toUpperCase()) > -1)
      {
        resultado.push(campos);
      }
    }
    return resultado;
  }
}
