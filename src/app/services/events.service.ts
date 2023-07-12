import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventFromServer, Events } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends DataService<Events>{
   constructor(private httpClient:HttpClient) {
    super(environment.url+"/events",httpClient);

  }
}
