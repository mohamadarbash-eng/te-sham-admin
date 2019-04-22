import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export const API_PATH = {
  COURSES_API: '/api/courses',
  CREATE_NEW_USER: '/api/user/signup',
  LOGIN_USER: '/api/user/login',
  DIPLOMAS_API: '/api/diplomas',
  COURSE_DETAILS_API: '/api/course/details'
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

  public static initParams(paramObject: { [key: string]: string | number }): string {
    let query = '';
    for (const param in paramObject) {
      query += `/${paramObject[param]}`;
    }
    return query;
  }

  public static initUrl(apiPath, query, params): string {
    let urlAPI = base + apiPath;
    if (params) {
      urlAPI += ProxyService.initParams(params);
    }
    if (query) {
      urlAPI += ProxyService.initQuery(query);
    }
    return urlAPI;
  }

  public getProxy(apiPath: string, query?: { [key: string]: string | number },
                  params?: { [key: string]: string | number }): Observable<any> {
    return this._httpClient.get(ProxyService.initUrl(apiPath, query, params));
  }

  public postProxy(apiPath: string, body: { [key: string]: string | number } = null,
                   params?: { [key: string]: string | number }): Observable<any> {
    return this._httpClient.post(ProxyService.initUrl(apiPath, null, params), body);
  }
}
