import { Component } from '@angular/core';
import { map } from 'rxjs';
import { DataType } from 'src/app/models/data.type';
import { Events } from 'src/app/models/events.model';
import { EventsService } from 'src/app/services/events.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-events.list',
  templateUrl: './events.list.component.html',
  styleUrls: ['./events.list.component.css']
})
export class EventsListComponent {
  events:Events[]=[]
  /**
   *
   */
    constructor(
      private eventsService:EventsService
    ) {}
    getAll(){
      return this.eventsService.getAll()
      .subscribe({
          next :(result)=>{
            const res=result
            result.map(e=>console.log(e))
            const values=Object.values(result)[1]

            console.log(this.events)
            console.log(values)
            return this.events
          },
          error:(err)=>console.log(err)
        })
    }
    ngOnInit(){
      this.getAll()
    }

}
