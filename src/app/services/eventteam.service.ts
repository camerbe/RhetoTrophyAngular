import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { EventTeams } from '../models/eventteam.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventteamService extends DataService<EventTeams>{

  constructor(private httpClient:HttpClient) { 
    super(environment.url+"/eventteams",httpClient)
  }
}
