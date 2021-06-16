import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Catagory } from '../models/catagory.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  user:User=new User();
  private userData = new BehaviorSubject(this.user);
  GetUserData = this.userData.asObservable();
  public isshowSideBar=true;
  baseURL:string="https://csamazons-toolchain.eu-gb.mybluemix.net"

  constructor(private http: HttpClient) { }

  SetUser(setUser: User) {
    this.userData.next(setUser)
    }

    addCarbonData(catagory:Catagory): Observable<any> {
      const headers = { 'content-type': 'application/json'} 
      debugger;
      catagory.name=this.user.Name; 
      const body=JSON.stringify(catagory);
      console.log(body)
      return this.http.post(this.baseURL + '/users', body,{'headers':headers})
    }
}
