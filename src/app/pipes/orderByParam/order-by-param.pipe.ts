import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user';

@Pipe({
  name: 'orderByParam'
})
export class OrderByParamPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {
    const arg = args[0];
    if (arg.toLowerCase() === 'name') {
      return value.sort(this.compareByName);
    }
    return value.sort(this.compareByRanking);
  }

  compareByName(user1: User, user2: User) {
    return user1.name.localeCompare(user2.name);
  }

  compareByRanking(user1: User, user2: User): number {
    if (user1.ranking > user2.ranking) {
      return 1;
    }
    if (user1.ranking < user2.ranking) {
      return -1;
    }
    if (user1.ranking === user2.ranking) {
      return 0;
    }
    return 0;
  }

}
