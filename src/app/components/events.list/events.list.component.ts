import { Component } from '@angular/core';
import { map } from 'rxjs';
import { EventFromServer, Events } from 'src/app/models/events.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events.list',
  templateUrl: './events.list.component.html',
  styleUrls: ['./events.list.component.css']
})
export class EventsListComponent {

  events!:Events[]|any
  temp!:Events
  eventInter!:EventFromServer[]

  /**
   *
   */
    constructor(
      private eventsService:EventsService
    ) {}
    deleteEvent(arg0: string) {
      throw new Error('Method not implemented.');
      }
    getAll(){
      return this.eventsService.getAll()
        .subscribe({
            next :(result)=>{
              const evt=result as unknown as EventFromServer
              const data =evt.data as unknown as Events
              this.events=data
              return this.events
          },
          error:(err)=>console.log(err)
        })
    }
    ngOnInit(){
      this.getAll()
    }

}
