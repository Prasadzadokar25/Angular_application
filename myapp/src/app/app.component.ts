import { Component } from '@angular/core';
class User {
  constructor(public name: string, public contact: string, public email: string) { }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'Registration fromstudent for ';

  displayname = '';
  displayemail = '';
  displaycontact = '';

  users: User[] = [];

  getValue(name: string, email: string, contact: string) {
    this.displayname = name;
    this.displayemail = email;
    this.displaycontact = contact;
    this.users.push(new User(name, email, contact));

    // for (let i = 0; i < this.users.length; i++) {
    //   document.write(this.users[0].name);
    // }
  }
}
