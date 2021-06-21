import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeProducto'
})
export class PipeProductoPipe implements PipeTransform {

  transform(value: any[], findProduct: string): any {
    const resultBusqueda = [];

    for (const producto of value ){
      if (producto.nombre.indexOf(findProduct) > -1 ){
        resultBusqueda.push(producto);
      };
    };
    return resultBusqueda
 }

}
