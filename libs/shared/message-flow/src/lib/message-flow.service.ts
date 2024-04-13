import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import the 'Observable' class

@Injectable({
  providedIn: 'root',
})
export class MessageFlowService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(public http: HttpClient) {}

  startChat(sessionId: string): Observable<string> {
    return this.http.get<string>(`${this.url}/${sessionId}`);
  }

  sendMessage(sessionId: string, message: string): Observable<string> {
    return this.http.post<string>(this.url, { sessionId, message });
  }

  endChat(sessionId: string): Observable<string> {
    return this.http.delete<string>(`${this.url}/${sessionId}`);
  }
}
