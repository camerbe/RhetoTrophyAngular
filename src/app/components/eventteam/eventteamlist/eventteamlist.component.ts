import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventTeamFromServer, EventTeams } from 'src/app/models/eventteam.model';
import { EventteamService } from 'src/app/services/eventteam.service';
import { ObservableService } from 'src/app/services/observable.service.service';

@Component({
  selector: 'app-eventteamlist',
  templateUrl: './eventteamlist.component.html',
  styleUrls: ['./eventteamlist.component.css']
})
export class EventteamlistComponent {
  eventteams!:EventTeams[]|any
  // temp!:EventTeams
  // eventteamInter!:EventTeamFromServer[]
  /**
   *
   */
  constructor(
    private eventTeamService:EventteamService,
    private obsService:ObservableService,
    private router:Router
    ) {}
    getAll(){
      return this.eventTeamService.getAll().subscribe({
        next:(result)=>{
              const evt=result as unknown as EventTeamFromServer
              //const data =evt.data as unknown as EventTeams
              this.eventteams=evt.data as unknown as EventTeams
              console.log(this.eventteams)
              return this.eventteams
        },
        error:(err)=>console.log(err)
      })
    }
    deleteEventTeam(oid:string){
      console.log('deleteEventteam')
    }
    ngOnInit(){
      this.getAll()
    }
}
