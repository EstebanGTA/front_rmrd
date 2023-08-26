import { Pipe, PipeTransform } from '@angular/core';
import { InformeModel } from '../model/informe.model';

@Pipe({
  name: 'buscadorInforme'
})
export class BuscadorInformePipe implements PipeTransform {

  transform(informe: InformeModel[], searchTerm: string): InformeModel[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return informe;
    }

    const searchTermLower = searchTerm.toLowerCase();

    return informe.filter((info: InformeModel) =>
      info.estudiante.toLowerCase().includes(searchTermLower)
    );
  }

}
