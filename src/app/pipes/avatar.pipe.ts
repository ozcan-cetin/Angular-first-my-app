import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // console.log(value)
   const newvalue = value.split('')
    return newvalue[0].slice(0,1) + '.' + newvalue[1].toLocaleUpperCase().slice(0,1);
  }

}
