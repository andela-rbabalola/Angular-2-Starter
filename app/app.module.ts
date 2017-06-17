import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { UsersListComponent } from './shared/users-list.component';
import { UserFormComponent } from './users/user-form.component';
import { UserThumbnailComponent } from './users/user-thumbnail/user-thumbnail.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserService } from './shared/user.service';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
],
  declarations: [
    AppComponent,
    UserFormComponent,
    UserThumbnailComponent,
    NavBarComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {};
