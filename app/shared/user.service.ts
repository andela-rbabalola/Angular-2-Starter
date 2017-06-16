import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers() {
    return USERS;
  }

  getUser(id: number) {
    return USERS.find(user => user.id === id)
  }
}

const USERS = [
  { id: 1, name: 'Rotimi', username: 'Babalola' },
  { id: 2, name: 'Titi', username: 'Babalola' },
  { id: 3, name: 'John', username: 'Doe' },
  { id: 4, name: 'Jane', username: 'Doe' },
  { id: 5, name: 'Alex', username: 'Morgan' }
]
