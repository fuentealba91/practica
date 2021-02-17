import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroApe'
})
export class FiltroApePipe implements PipeTransform {

  transform(value: any, args: any): any 
  {
    const resultado: string[] = [];

    if(args==="")
    {
      return value;
    }

    for(const campos of value)
    {
      if(campos.apellido.toUpperCase().indexOf(args.toUpperCase()) > -1)
      {
        resultado.push(campos);
      }
    }
    return resultado;
  }

}
