import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  message: string = 'Hello there!';

  users: User[] = [
    { id: 20, name: 'Rotimi', username: 'Babalola' },
    { id: 19, name: 'John', username: 'Doe' },
    { id: 15, name: 'Jane', username: 'Doe' }
  ];

  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
};
