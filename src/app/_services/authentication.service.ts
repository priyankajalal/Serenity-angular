import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import { BehaviorSubject,Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
    loggedInUser = new BehaviorSubject<any>(this.getUserFromLocalStorage());
      getLoggedInUser() : Observable<any> {
        return this.loggedInUser.asObservable();
      }

    constructor(private http: HttpClient) { }
    private getUserFromLocalStorage() : any {
        return JSON.parse(localStorage.getItem('currentUser'));
      }
    login(username: string, password: string) {
        return this.http.post<any>(environment.baseUrl+'/login', { username: username, password: password })
            .map(result => {
                if (result && result.auth_token) {
                    localStorage.setItem('currentUser', JSON.stringify(result));
                     this.loggedInUser.next(result);
                }
                return result;
            }
            );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedInUser.next("");
    }


}
