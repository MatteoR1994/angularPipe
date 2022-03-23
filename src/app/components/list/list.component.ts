import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/cars';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public userList?: User[];
  @Input() public listBackgroundColor: string = 'tomato';

  public cars: Car[] = [
    {
      name: 'punto',
      displacement: 1300,
    },
    {
      name: 'alfa romeo',
      displacement: 1900,
    },
    {
      name: 'panda',
      displacement: 1200,
    },
    {
      name: 'seicento',
      displacement: 1100,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('ciao');
  }

  capitalizeFirst(word: string): string {
    console.log('pippo');

    const firstChar = word[0];
    const upperFirst = firstChar.toUpperCase();
    const remainingChars = word.slice(1);
    return upperFirst + remainingChars;
  }
}
