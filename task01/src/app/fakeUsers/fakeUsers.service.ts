import { User, fakeUsers } from './fakeUsers';

export class FakeUsersService {

  private users: User[];

  constructor() {
    this.users = fakeUsers;
  }

  getById(id) {
    return this.users.find((element, index) => {
      return element.id === id;
    });
  }

  getAll() {
    return this.users;
  }

}