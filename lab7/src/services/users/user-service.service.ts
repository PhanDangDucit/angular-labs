import { Injectable } from '@angular/core';
import { Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor() { }
  getUserById() {

  }

  async getAllUser() {
    return await((await fetch("/users")).json()) as Users[] ?? [];
  }
}
