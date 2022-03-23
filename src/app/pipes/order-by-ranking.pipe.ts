import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'orderByRanking',
})
export class OrderByRankingPipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): User[] {
    const newArray = [...value];
    return newArray.sort(this.compareUsers);
  }

  compareUsers(user1: User, user2: User): number {
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
