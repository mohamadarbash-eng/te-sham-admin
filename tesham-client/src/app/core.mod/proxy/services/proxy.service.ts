import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export const API_PATH = {
  COURSES_API: '/api/courses',
  CREATE_NEW_USER: '/api/user/signup',
  LOGIN_USER: '/api/user/login'
};
// TODO add it if you deploy to two servers

const base = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
// TODO add authentication request, it should be the first request to send to backend, before the app can running up
// TODO error Handle
  constructor(private _httpClient: HttpClient) {

  }

  public static initQuery(queryObject: { [key: string]: string | number }): string {
    let query: number | string = '?';
    for (const item in queryObject) {
      query += `&${item}=${queryObject[item]}`;
    }
    return query;
  }

  public getProxy(apiPath: string, query?: { [key: string]: string | number }): Observable<any> {
    let urlAPI = apiPath;
    if (query) {
      urlAPI += ProxyService.initQuery(query);
    }
    return this._httpClient.get(urlAPI);
  }

  public postProxy(apiPath: string, body: { [key: string]: string | number } = null): Observable<any> {
    const urlAPI = apiPath;

    return this._httpClient.post(urlAPI, body);

  }
}
