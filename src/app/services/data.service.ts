import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(@Inject(String) private url:string,private http:HttpClient) { }
  getAll():Observable<T[]>{
    return this.http.get<T[]>(this.url)
      .pipe(map((res)=>res));
  }
  show(id:string):Observable<T>{
    return this.http.get<T>(this.url+'/'+id);
    //.pipe(map((res)=>res));
  }
  create(resource:T):Observable<T>{
      return this.http.post<T>(this.url,JSON.stringify(resource));
   }
  delete(id:string):Observable<T>{
    return this.http.delete<T>(this.url+'/'+id);
  }
  update(id:string,resource:any):Observable<T>{
    return this.http.put<T>(this.url+'/'+id,JSON.stringify(resource))
  }

}
