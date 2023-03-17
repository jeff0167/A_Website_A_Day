import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
  }

}
