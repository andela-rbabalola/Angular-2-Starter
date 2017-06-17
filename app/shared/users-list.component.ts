import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  template: `
    <div>
    <h1>Here are all Users</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let user of users" class="col-md-5">
        <user-thumbnail [user]="user"></user-thumbnail>
      </div>
    </div>
  </div>
  `,
  styles: [`
    h1 { margin-top: 30px; }
  `]
})

export class UsersListComponent {
  users: any
  constructor (private userService: UserService) {
  }


  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
}
