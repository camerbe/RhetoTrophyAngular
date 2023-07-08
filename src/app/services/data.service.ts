import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(private url:string,private http:HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  show(id:string):Observable<any>{
    return this.http.get<any>(this.url+'/'+id);
  }
  create(resource:any):Observable<any>{
    return this.http.post<any>(this.url,JSON.stringify(resource));
  }
  delete(id:string){
    return this.http.get(this.url+'/'+id);
  }
  update(id:string,resource:any):Observable<any>{
    return this.http.put<any>(this.url,JSON.stringify(resource))
  }

}
