import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Catagory } from '../models/catagory.model';
import { User } from '../models/user.model';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  user:User=new User();
  private userData = new BehaviorSubject(this.user);
  GetUserData = this.userData.asObservable();
  public isshowSideBar=true;
  baseURL:string="https://csamazons-toolchain.eu-gb.mybluemix.net"

  constructor(private http: HttpClient) {
 // this.user.email="amolhackthontest@gmail.com";
   }

  SetUser(setUser: User) {
    this.userData.next(setUser)
    }

    addCarbonData(catagory:Catagory): Observable<any> {
      const headers = { 'content-type': 'application/json'} 
      const body=JSON.stringify(catagory);
      console.log(body)
      return this.http.post(this.baseURL + '/users/user', body,{'headers':headers}).pipe(
        catchError(this.handleError)
        );
    }
    getMainchatData(username:string): Observable<any> {
      return this.http.get(this.baseURL + '/users/'+username+'/abc').pipe(
        catchError(this.handleError)
        );
    }

    getPieChartHousing(username:string): Observable<any> {
        return this.http.get(this.baseURL + '/users/piechart/'+username+'/housing/').pipe(
          catchError(this.handleError)
          );
    }

    getPieChartTravel(username:string): Observable<any> {
      return this.http.get(this.baseURL + '/users/piechart/'+username+'/travel/').pipe(
        catchError(this.handleError)
        );
  }

  getPieChartFood(username:string): Observable<any> {
      return this.http.get(this.baseURL + '/users/piechart/'+username+'/food/').pipe(
        catchError(this.handleError)
        );
}


    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
