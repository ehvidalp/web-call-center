import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Auth } from '../models/auth';
import { BaseService } from './base.service';
import jwt_decode from 'jwt-decode';
import { ServerResponse } from '../models/server-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `auth`;
  redirectUrl = '/';
  private ipProvider = 'https://jsonip.com';
  private jwtToken: string = '';
  private decodedToken: { [key: string]: string } = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private baseService: BaseService
  ) {
    this.jwtToken = localStorage.getItem('sirecoToken') || '';
  }

  private decodeToken() {
    if (this.jwtToken) this.decodedToken = jwt_decode(this.jwtToken);
  }

  private getExpiryTime(): number {
    this.decodeToken();
    return +this.decodedToken.exp;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();

    if (isNaN(expiryTime)) return true;
    else return 1000 * expiryTime < new Date().getTime();
  }

  isLoggedIn(): boolean {
    return !this.isTokenExpired();
  }

  login(username: string, password: string, ip: string): Observable<boolean> {
    password = btoa(password);
    const payload = {
      username,
      password,
      ip,
    };

    return this.http.post<ServerResponse>(this.url, payload).pipe(
      map((data) => {
        const result = data.data as Auth;
        this.jwtToken = result.token;
        localStorage.setItem('sirecoToken', result.token);
        localStorage.setItem('sirecoUser', result.user);
        console.log('auth login');
        return true;
      }),
      catchError(this.baseService.handleError)
    );
  }

  logout(): void {
    localStorage.clear();
  }

  getLoggedUserName(): string {
    return localStorage.getItem('sirecoUser') || '';
  }

  getLoggedUID(): string {
    return this.decodedToken.userId;
  }

  getMenuPrivileges(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.url}/mainmenu`)
      .pipe(catchError(this.baseService.handleError));
  }

  getPublicIP(): Observable<string> {
    return this.http.get<{ ip: string }>(this.ipProvider).pipe(
      map((data) => {
        return data.ip;
      })
    );
  }
}
