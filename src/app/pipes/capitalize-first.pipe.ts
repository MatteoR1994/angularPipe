import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const firstChar = value[0];
    const upperFirst = firstChar.toUpperCase();
    const remainingChars = value.slice(1);
    return upperFirst + remainingChars;
  }

}
