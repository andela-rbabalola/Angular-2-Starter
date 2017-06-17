import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
};
