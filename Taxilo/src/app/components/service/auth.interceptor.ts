import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { LogInService } from "./log-in.service";




@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login: LogInService) { }

    intercept(

        req: HttpRequest<any>,
        next: HttpHandler

    ): Observable<HttpEvent<any>> {

        let authReq = req;
        const token = this.login.getToken();
        console.log("insisde interceptor");
        
         
        if (token != null) {

            authReq = authReq.clone({
                setHeaders: { Authorization: `Bearer${token}` },
                withCredentials: true,

            });

        }

        return next.handle(authReq);

    }
}


export const authInterceptorProvider = [

    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
]