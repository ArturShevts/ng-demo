import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, BehaviorSubject } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  tempUrl = 'https://jsonplaceholder.typicode.com/users';
  private user$ = new BehaviorSubject<User>(null);
  userData$ = this.user$.asObservable();

  constructor(public http: HttpClient) {}

  getCurrentUserDataById(id: number): Observable<User> {
    let res = this.http.get<User>(`${this.tempUrl}/${id}`);
    res.subscribe((user: User) => {
      this.user$.next(user);
    });

    return res;
  }
  getCurrentUserDataByToken(token: string): Observable<User> {
    let body = {
      token: token,
    };
    let res = this.http.post<User>(this.tempUrl, body);
    res.subscribe((user: User) => {
      this.user$.next(user);
    });

    return res;
  }
  clearUserData(): void {
    this.user$.next(null);
  }
}
