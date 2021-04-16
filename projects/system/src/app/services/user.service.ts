import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'users'

  users: User[] = [
    { id: 's11132', names: 'Roberto', surnames: 'Martinez', user: 'rmartinez', role: { id: '232', name: 'Administrador' } },
    { id: 'dsfasa', names: 'Rigoberto', surnames: 'oliveira', user: 'roliveira', role: { id: '232', name: 'Agente' } },
  ]

  constructor(private http: HttpClient) { }

  // update(user: User): Observable<void> {
  //   return this.http.put<void>(`${this.url}`, user)
  // }

  // get(id: string): Observable<User> {
  //   return this.http.get<User>(`${this.url}/${id}`)
  // }

  // getAll(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.url}`)
  // }

  update(user: User): Observable<void> {
    const index = +this.users.findIndex((x) => x.id == user.id)
    this.users.splice(index, 1, user)
    return of(void 0)
  }

  get(id: string): Observable<User> {
    const index = +this.users.findIndex((x) => x.id === id)
    const user: User = this.users[index]
    return of(user)
  }

  getAll(): Observable<User[]> {
    return of(this.users)
  }
}
