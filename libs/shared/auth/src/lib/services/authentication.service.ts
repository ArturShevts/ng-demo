import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { BehaviorSubject, tap, switchMap } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // create an injector for the url
  URL = 'https://jsonplaceholder.typicode.com/users';
  private sessionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  session$: Observable<string> = this.sessionSubject.asObservable();
  constructor(
    public http: HttpClient,
    public userDataService: UserDataService
  ) {
    let token = localStorage.getItem('sessionId');

    if (token) {
      this.sessionSubject.next(token);
    }
  }

  saveSessionId(token: string): void {
    localStorage.setItem('sessionId', token);
  }

  getSessionId(): string | null {
    return localStorage.getItem('sessionId');
  }

  removeSessionId(): void {
    localStorage.removeItem('sessionId');
  }

  login(email: string, password: string): Observable<User> {
    let body = {
      email: email,
      password: password,
    };
    return this.http.post<string>(URL, body).pipe(
      tap((token: string) => {
        this.saveSessionId(token);
        this.sessionSubject.next(token);
      }),
      switchMap((token: string) => {
        return this.userDataService.getCurrentUserDataByToken(token);
      })
    );
  }

  logout(): Observable<boolean> {
    return this.session$.pipe(
      tap(() => {
        this.removeSessionId();
        this.sessionSubject.next('');
      }),
      switchMap(() => {
        return this.userDataService.clearUserData();
      })
    );
  }
}
