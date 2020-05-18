import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.auth_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.auth_token}`
                }
            });
        }


         return next.handle(request).do((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
              }
            }, (err: any) => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  // redirect to the login route
                  // or show a modal
                  this.router.navigate(['/login']);
                }
              }
            });



    }
}
