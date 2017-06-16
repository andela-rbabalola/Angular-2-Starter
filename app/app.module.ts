import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
],
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserFormComponent,
    UserDetailsComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {};
