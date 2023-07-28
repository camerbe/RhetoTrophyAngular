import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventTrackExtendedFromServer, EventTracksExtended } from 'src/app/models/eventtrack.model';
import { EventTrackService } from 'src/app/services/eventtrack.service';
import { ObservableService } from 'src/app/services/observable.service.service';

@Component({
  selector: 'app-eventtrack',
  templateUrl: './eventtrack.component.html',
  styleUrls: ['./eventtrack.component.css']
})
export class EventtrackComponent {
  eventtracks!:EventTracksExtended[]|any
  subscription!:Subscription
  parcoursSubscription!:Subscription
  parcours:string='A'
  /**
   *
   */
  constructor(
    private eventTracksService:EventTrackService,
    private observableService:ObservableService
  ) {}
  getAll(code:string){
    
    return this.eventTracksService.getEventTracksByCode(code).subscribe({
      next:(res)=>{
        const evt=res as unknown as EventTrackExtendedFromServer
        const data=evt.data as unknown as EventTracksExtended
        this.eventtracks=data
        this.observableService.setObs(this.eventtracks)
        return this.eventtracks
      }
    })
  }
  ngOnInit(){
    this.parcoursSubscription=this.observableService.obsParcoursSubject.subscribe({
      next:(code:string)=>{
        this.parcours=code
        this.getAll(this.parcours)
       
      }
      
    })
    
    this.getAll(this.parcours)
    this.subscription=this.observableService.obsSubject.subscribe(res=>this.eventtracks=res)
    //console.log(`parcoursSubscription:${this.parcoursSubscription}`)
    //console.log(`parcours:${this.parcours}`)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe
    this.parcoursSubscription.unsubscribe
  }
  filterTeam(){
     this.eventtracks.filter((el:EventTracksExtended)=>{
      this.eventtracks
    })
  }
  filterinputNumTeam(value:any){
    const teamNumber=Number(value.target.value)
    this.eventtracks=this.eventtracks.filter((el:EventTracksExtended)=>{
      el.teamnumber=teamNumber
      console.log(`teamnumber:${el.teamnumber} teamNumber:${teamNumber}`)
    })
    this.subscription=this.eventtracks
    this.observableService.setObs(this.eventtracks)
    //console.log(this.eventtracks)
  }
  onSelect(TrackOid:any,TeamOid:any){
    console.log(`TrackOid=${TrackOid} TeamOid=${TeamOid} `)
  }
}
