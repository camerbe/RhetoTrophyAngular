import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventTeamTrackService } from 'src/app/services/eventteamtrack.service';
import { ObservableService } from 'src/app/services/observable.service.service';

@Component({
  selector: 'app-eventeamtrack',
  templateUrl: './eventeamtrack.component.html',
  styleUrls: ['./eventeamtrack.component.css']
})
export class EventeamtrackComponent {
  frmGrpEventTeamTrack!:FormGroup
  subscription!:Subscription
  code:string='A'
  /**
   *
   */
  constructor(
    private fb:FormBuilder,
    private observableService:ObservableService,
    private eventTeamTrackService:EventTeamTrackService
  ) {
    this.frmGrpEventTeamTrack=this.fb.group({
      Code:['']
    })
  }
  get Code(){
    return this.frmGrpEventTeamTrack.get('Code')
  }
  ngOnInit(){
    this.subscription=this.observableService.obsParcoursSubject.subscribe(res=>this.code=res)
    console.log(`code:${this.code} subscription:${this.subscription}`)
    this.frmGrpEventTeamTrack.patchValue({
      Code:this.code
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe
  }
}
