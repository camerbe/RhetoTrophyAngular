import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { EventTracks, EventTracksExtended } from '../models/eventtrack.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTrackService extends DataService<EventTracks> {

  constructor(private httpClient:HttpClient) { 
    super(environment.url+'/eventtracks',httpClient)
  }
  getEventTracksByCode(code:string):Observable<EventTracksExtended[]>{
    return this.httpClient.get<EventTracksExtended[]>(environment.url+'/eventtracks/code/'+code)
      .pipe(map((res)=>res));
  }
}
