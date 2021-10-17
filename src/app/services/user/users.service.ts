import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import{Userdata} from '../../intefaces/userdata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL;
  private token = environment.ACCESS_TOKEN;
  

  constructor(private http:HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Authorization':this.token
    
  });

  async getUsers(username:String) {
    
    const endpoint = 'users'
    const users =  await this.http.get<Userdata>(`${this.baseUrl}${endpoint}/${username}`, {headers:this.httpHeaders}).toPromise();

    return users;
  }
}
