import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_PATH = {
  COURSES_API: '/api/courses'
};
// TODO

const base = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private _httpCLient: HttpClient) { }

  public getProxy(apiPath: string): Observable<any> {
    return this._httpCLient.get(base + apiPath);
  }
}
