import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_PATH = {
  COURSES_API: '/api/courses',
  CREATE_NEW_USER: '/api/user/signup',
  LOGIN_USER: '/api/user/login'
};
// TODO

const base = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ProxyService {
// TODO add authentication request, it should be the first request to send to backend, before the app can running up
  constructor(private _httpClient: HttpClient) { }
 public static initQuery( queryObject: {[key: string]: string | number } ): string {
    let query: number | string = '?';
    for (const item in queryObject) {
      query += `&${item}=${queryObject[item]}`;
    }
    return query;
  }

  public getProxy(apiPath: string, query?: {[key: string]: string | number }): Observable<any> {
    let urlAPI = base + apiPath;
    if (query) {
    urlAPI += ProxyService.initQuery(query);
    }
    return this._httpClient.get(urlAPI);
  }

  public postProxy(apiPath: string, body: {[key: string]: string | number } = null): Observable<any> {
    const urlAPI = base + apiPath;

    return this._httpClient.post(urlAPI, body);
  }
}
