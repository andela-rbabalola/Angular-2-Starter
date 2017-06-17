import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserThumbnailComponent } from './users/user-thumbnail/user-thumbnail.component';
import { UsersListComponent } from './shared/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
];
