import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL;

  constructor(private http:HttpClient) { }

  getUsers(username:String){
    const endpoint = 'users'
    return this.http.get(`${this.baseUrl}${endpoint}/${username}`, {}).toPromise();
  }
}
