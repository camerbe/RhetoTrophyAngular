import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EventTeamTrack } from '../models/eventteamtrack.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTeamTrackService extends DataService<EventTeamTrack> {

  constructor(private httpClient:HttpClient) { 
    super(environment.url+"/eventteamtracks",httpClient)
  }
  getTrackOidAndTeamOid(trackoid:any,teamoid:any):Observable<EventTeamTrack[]>{
    return this.httpClient.get<EventTeamTrack[]>(environment.url+`/eventteamtracks/${trackoid}/${teamoid}`)
      .pipe(map((res)=>res));
  }
}
