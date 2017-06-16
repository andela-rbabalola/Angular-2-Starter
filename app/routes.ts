import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const appRoutes: Routes = [
  { path: 'users', component: AppComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
