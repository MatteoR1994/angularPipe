import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/cars';

@Pipe({
  name: 'orderByNumber'
})
export class OrderByNumberPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {    
    const arg = args[0];    
    const newArray = [...value];
    const firstElement = value[0];
    if (Object.prototype.hasOwnProperty.call(firstElement, arg)) {
      const typeOfProperty = typeof firstElement[arg];      
      if (typeOfProperty === 'number') {
        return newArray.sort((el1, el2) => this.compareByNumber(el1, el2, arg));
      } else {
        return newArray;
      }
    } else {
      return newArray;
    }
  }

  compareByNumber(obj1: any, obj2: any, property: any): number {
    if (obj1[property] > obj2[property]) {
      return 1;
    }
    if (obj1[property] < obj2[property]) {
      return -1;
    }
    if (obj1[property] === obj2[property]) {
      return 0;
    }
    return 0;
  }

}
