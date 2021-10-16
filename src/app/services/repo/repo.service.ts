import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient,  HttpHeaders, HttpParams} from '@angular/common/http';
import{Userdata} from '../../intefaces/userdata';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private baseUrl = environment.BASE_URL;

  constructor(private http:HttpClient) { }
  async getRepos(username:String) {
    
    const endpoint = 'users'
    const repo:Array<any> =  await this.http.get<Array<any>>(`${this.baseUrl}${endpoint}/${username}/repos`, {}).toPromise();

    return repo;
  }

}
