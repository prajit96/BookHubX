import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://odd-red-armadillo-ring.cyclic.app/auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  signup(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }
  // Observable to track authentication state
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  // Method to update authentication state
  setAuthenticated(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }
}
