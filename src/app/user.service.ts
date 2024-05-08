import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  posturl='http://localhost:3000/posts';
  url='http://localhost:3000/user';
  constructor(private _http:HttpClient) { }


  getUser():Observable<any>{
    return this._http.get<any>(this.url);
  }

  viewdetailsbyid(id:any):Observable<any>{
    return this._http.get<any>(this.url+"/"+id);
  }
  //for post  url 
  getpost():Observable<any>{
    return this._http.get<any>(this.posturl);
  }
  getpostbyid(id:any):Observable<any>{
    return this._http.get<any>(this.posturl+"/"+id);
  }

  
}
