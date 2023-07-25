import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventFromServer, Events } from 'src/app/models/events.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  frmGroupEvent!:FormGroup
  isAddMode!:boolean
  oid!:string
  evt!:Events
  /**
   *
   */
  constructor(
    private fb:FormBuilder,
    private eventsService:EventsService,
    private router:Router,
    private route:ActivatedRoute

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
    if(this.isAddMode){
      this.eventsService.create(this.frmGroupEvent.value)
      .subscribe({
        next:(res)=>{
          const result=res
          if (result){
            this.router.navigate(['/events'])
          }

        },
        error:(err)=>console.log(err)
      })
    }
    else{
      this.eventsService.update(this.oid,this.frmGroupEvent.value).subscribe({
        next:(res)=>{
          const eventfromsvr=res as unknown as EventFromServer
          this.evt =eventfromsvr.data as unknown as Events
          if(eventfromsvr.sucess)
          {
            this.router.navigate(['/events'])
          }

        },
        error:(err)=>console.log(err)
      })
    }
  }
  ngOnInit(){
    
    this.oid=this.route.snapshot.params['oid'];
    
    this.isAddMode=!this.oid
    
    if(!this.isAddMode){
      this.eventsService.show(this.oid).subscribe({
        next:(res)=>{
          const evts=res as unknown as EventFromServer
          this.evt =evts.data as unknown as Events
                         
          this.frmGroupEvent.patchValue({
            Code:this.evt.code,
            Name:this.evt.name,
            Date: formatDate(this.evt.date,'yyyy-MM-dd','en-US'),
            MaxNetTime:this.evt.maxnettime,
            OptimisticLockField:this.evt.optimisticlockfield
            
          })
          
         // console.log(`oid:${this.oid} isAddMode:${this.isAddMode} evt:${this.frmGroupEvent.value}`)
         // this.router.navigate(['/event/add'])
        }
      })
    }

  }

}
