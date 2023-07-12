import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventFromServer, Events } from 'src/app/models/events.model';
import { EventsService } from 'src/app/services/events.service';
import { ObservableService } from 'src/app/services/observable.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events-list',
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
      private eventsService:EventsService,
      private obsService:ObservableService,
      private router:Router
    ) {}
    deleteEvent(oid: string) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'm-3 btn btn-success bg-gradient p-2 btn-lg',
          cancelButton: 'btn btn-danger bg-gradient p-2 btn-lg'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Êtes-vous sûr?',
        text: "De vouloir supprimer cet Event !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler ',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.eventsService.delete(oid).subscribe({
            next:()=>{
              this.events=this.events.filter((a:Events)=>a.oid!=oid)
              this.obsService.setObs(this.events)
              this.getAll()
            },
            error:(err)=>console.log(err)
          })

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {

        }
      })
      this.router.navigate(['/events'])
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
