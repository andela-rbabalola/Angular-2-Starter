import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'user-details',
  templateUrl: '/app/users/user-details/user-details.component.html'
})


export class UserDetailsComponent {
  user: any
  constructor (private userService: UserService) {
  }


  ngOnInit() {
    this.user = this.userService.getUser(1);
  }
}
