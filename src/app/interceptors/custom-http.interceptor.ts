import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    
    public intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        console.log('intercept');

        const modifiedReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json') // Example: Set Content-Type
        });

        return next.handle(modifiedReq);
    }
}