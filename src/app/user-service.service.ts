import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrlsave: string;
  private usersUrlfind: string;
  private test: string;

  constructor(private http: HttpClient) {
    this.usersUrlsave = 'http://localhost:5858/shop/saveShopClient';
    this.usersUrlfind = 'http://localhost:5858/shop/findShopClient';


  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrlfind);
  }

  // tslint:disable-next-line:typedef
  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrlsave, user);
  }
}
