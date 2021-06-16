import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  user:User=new User();
  private userData = new BehaviorSubject(this.user);
  GetUserData = this.userData.asObservable();
  public isshowSideBar=true;

  constructor() { }

  SetUser(setUser: User) {
    this.userData.next(setUser)
    }
}
