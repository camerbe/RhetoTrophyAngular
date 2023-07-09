import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  frmGroupEvent?:FormGroup

  /**
   *
   */
  constructor(
    private fb:FormBuilder,
    private eventsService:EventsService
  ) {
    this.frmGroupEvent=this.fb.group({
      Code:['',[Validators.required]],
      Name:['',[Validators.required]],
      Date:['',],
      MaxNetTime:['',],
      OptimisticLockField:['',]

    })
  }

  onSubmit() {
  throw new Error('Method not implemented.');
}

}
