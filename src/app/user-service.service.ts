import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  user: User;
  private usersUrlsave: string;
  private usersUrlfind: string;
  private userById: string;
  private  editUsers: string;

  constructor(private http: HttpClient) {
    this.usersUrlsave = 'http://localhost:5858/shop/saveShopClient';
    this.usersUrlfind = 'http://localhost:5858/shop/findShopClient';
    this.userById = 'http://localhost:5858/shop/shopClient/';
    this.editUsers = 'http://localhost:5858/shop/updateShopClient/update';



  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrlfind);
  }


  public findById(shopClientId: number): Observable<any>{
    return this.http.get<any>(this.userById + shopClientId);
  }
  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrlsave, user);
  }
  public updateUser(shopClientId: number , value: any): Observable<any>{
      return this.http.put(`${this.editUsers}/${shopClientId}`, value);
  }

}
