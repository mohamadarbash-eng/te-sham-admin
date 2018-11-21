import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTranslate'
})
export class PipeTranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
