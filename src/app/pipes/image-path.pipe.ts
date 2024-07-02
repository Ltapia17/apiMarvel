import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform( name:any ): string {
      if(!name)return '';
    return `${name.path}.${name.extension}`
  }
}
