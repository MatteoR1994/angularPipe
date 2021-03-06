import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularPipe';

  public users: User[] = [];

  public listData: any = {};

  public titleColor: string = 'yellow';

  public isVisible = true;

  constructor(private http: HttpClient) {
    // this.listData.background = 'green';
    // this.listData.usersArray = this.users;
    this.listData = { background: 'lightblue', usersArray: this.users };
  }

  ngOnInit(): void {
    this.http.get<User[]>('./assets/users.json').subscribe(users => {
      this.users = users;
      this.listData.usersArray = this.users;
    });
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
