import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FakeUsersService } from '../fakeUsers/fakeUsers.service';
import { User } from '../fakeUsers/fakeUsers';

@Component({
  templateUrl: './profilePage.component.html'
})
export class ProfilePageComponent {

  private user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: FakeUsersService
  ) { }

  ngOnInit() {
    this.route
      .params
      .subscribe((params: Params) => {
        this.user = this.usersService.getById(+params['id'])
      });
  }
}
