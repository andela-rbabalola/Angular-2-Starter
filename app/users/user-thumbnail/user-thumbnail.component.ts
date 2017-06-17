import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-thumbnail',
  template: `
    <div class="container">
      <div class="card" style="width: 20rem;">
        <div class="card-block">
          <h4 class="card-title">{{ user.name }}</h4>
            <p class="card-text"> {{ user.username }}</p>
            <a [routerLink]="['/users', user.id]" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
  `
})


export class UserThumbnailComponent {
  @Input() user: any
}
