import { Component } from '@angular/core';
import { FakeUsersService } from '../fakeUsers/fakeUsers.service';
import { User } from '../fakeUsers/fakeUsers';

@Component({
  templateUrl: './aboutPage.component.html'
})
export class AboutPageComponent {

  private users: User[];

  constructor(private usersService: FakeUsersService) {
    this.users = this.usersService.getAll();
  }

}
