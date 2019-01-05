/**
 * Created by dev on 29.03.17.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * This service represents a worker for image loading.
 */
@Injectable()
export class LazyLoaderService {

  /**
   *
   */
  private _cache: any = {};

  /**
   * Constructor
   * @param http Angular Http service
   */
  constructor(private http: HttpClient) {}

  /**
   * Loads the image and cached them.
   * @param url image to load from
   * @returns {any} return true if ready
   */
  public load(url: string): Promise<any> {
    if (this._cache[url]) {
      return Promise.resolve(true);
    } else {
      return new Promise((resolve, reject) => {
        this.http.get(url)
          .subscribe(res => {
            this._cache[url] = true;
            resolve(true);
          });
      });
    }
  }
}
