import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  users: User[] = [{
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main Street',
    phone: '555-1234'
  },
  {
    name: 'John Doe2',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main Street',
    phone: '555-1234'
  }];

  users2: User[] = [{
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main Street',
    phone: '555-1234'
  },
  {
    name: 'John Doe2',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main Street',
    phone: '555-1234'
  },
  {
    name: 'John Doe2',
    email: 'john.doe@example.com',
    age: 30,
    address: '123 Main Street',
    phone: '555-1234'
  }];

  constructor() { }

  ngOnInit() {
  }

}
