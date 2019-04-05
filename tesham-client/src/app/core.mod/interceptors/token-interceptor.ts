import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProxyService } from '../proxy/services/proxy.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private proxyService: ProxyService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.proxyService.getToken || '';
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(authReq);
  }
}
