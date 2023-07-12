import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  frmGroupEvent!:FormGroup

  /**
   *
   */
  constructor(
    private fb:FormBuilder,
    private eventsService:EventsService,
    private router:Router

  ) {
    this.frmGroupEvent=this.fb.group({
      Code:['',[Validators.required]],
      Name:['',[Validators.required]],
      Date:['',],
      MaxNetTime:['',],
      OptimisticLockField:['',]

    })
  }

  get Code(){
    return this.frmGroupEvent.get('Code')
  }
  get Name(){
    return this.frmGroupEvent.get('Name')
  }
  get Date(){
    return this.frmGroupEvent.get('Date')
  }
  get MaxNetTime(){
    return this.frmGroupEvent.get('MaxNetTime')
  }
  get OptimisticLockField(){
    return this.frmGroupEvent.get('OptimisticLockField')
  }

  onSubmit() {
    this.eventsService.create(this.frmGroupEvent.value)
      .subscribe({
        next:(res)=>{
          const result=res
          if (result){
            this.router.navigate(['/eventslist'])
          }

        },
        error:(err)=>console.log(err)
      })
  }

}
