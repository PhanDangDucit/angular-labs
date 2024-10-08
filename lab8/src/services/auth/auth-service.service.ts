import { inject, Injectable } from '@angular/core';
import { UserServiceService } from '../users/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userService = inject(UserServiceService);

  username:string = "";

  constructor() { }
  
  async checkMatchUserInfoLogin(userId: string) {
    // find user
    const user = (await this.userService.getAllUser())
      .find(user => user.id == userId);

    if(user) {
      return true;
    } else {
      return false;
    }
  }
  
  async login(username: string, password: string) {
    const data = await((await fetch("/users", {
      method: "POST",
      body: JSON.stringify({username, password})
    })).json())

    const isMatch = await(this.checkMatchUserInfoLogin(data.id));
    return isMatch;
  }
}