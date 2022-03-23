import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPipe';

  public users: User[] = [
    { name: 'fjoralba', ranking: 1 },
    { name: 'simone', ranking: 5 },
    { name: 'matteo', ranking: 4 },
    { name: 'marco', ranking: 3 },
    { name: 'lorenzo', ranking: 2 },
    { name: 'alessandro', ranking: 7 },
    { name: 'andrea', ranking: 6 }
  ];

  public listData: any = {};

  constructor() {
    this.listData.background = 'green';
    this.listData.usersArray = this.users;
  }

  onArrayChanged(usersArray: User[]) {
    this.users = usersArray;
    this.listData.usersArray = this.users;
  }

  onUserAdded(user: User) {
    this.users.push(user);
    this.listData.usersArray = this.users;
  }

  onUserChanged() {
    this.users[0].name = 'marta';
    this.listData.usersArray = this.users;
  }
}
