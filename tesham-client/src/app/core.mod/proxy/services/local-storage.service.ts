import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  public saveInLocalStorage(items:  { key: string, value: string }[]): void {
    items.forEach((item: { key: string, value: string }) => {
      localStorage.setItem(item.key, item.value);
    });
  }

  public removeFromLocalStorage(items:  { key: string, value: string }[]): void {
    items.forEach((item: { key: string, value: string }) => {
      localStorage.removeItem(item.key);
    });
  }

  public clearLocalStorage(): void {
   localStorage.clear();
  }

  public getFromLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }
}
