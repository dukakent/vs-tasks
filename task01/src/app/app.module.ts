import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/homePage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { AuthPageComponent } from './authPage/authPage.component';
import { ProfilePageComponent } from './profilePage/profilePage.component';

import { routes } from './app.routes';
import { FakeUsersService } from './fakeUsers/fakeUsers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AuthPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FakeUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
