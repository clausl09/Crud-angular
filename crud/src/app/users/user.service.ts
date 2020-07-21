import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreate, ResquestCreate, ResponseUser, ResquestUpdate } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);
  }

  createUsers(request: ResquestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request)
  }

  getUser(id: string): Observable<ResponseUser>{
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  updateUser(id: string, request: ResquestUpdate): Observable<ResquestUpdate>{
    const _url = `${this.url}/${id}`;
    return this.http.put<ResquestUpdate>(_url, request)
  }

  deleteUser(id: string): Observable<any>{
    const _url = `${this.url}/${id}`;
    return this.http.delete<ResquestUpdate>(_url)
  }
}
