import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/437a8872-382a-426c-804d-ee53268e560a';
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D - CREATE, READ, UPDATE, DELETE

  //retorna a lista de usuarios READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]> (this.apiUrl);
  }

  //salva usuario no banco CREATE

  postUser(user:User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, )
  }
  // this.httpOptions

  //Exclui o usuario do banco DELETE

  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //edita usuario UPDATE

  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user )
  }

  //Lista usuario unico

  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
