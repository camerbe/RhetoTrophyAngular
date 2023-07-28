import { Component } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service.service';

@Component({
  selector: 'app-saisie-header',
  templateUrl: './saisie.header.component.html',
  styleUrls: ['./saisie.header.component.css']
})
export class SaisieHeaderComponent {
  parcours:string='A'
  /**
   *
   */
  constructor(
    private obsService:ObservableService
  ) {}
  firedColor(value:string){
    this.parcours=value
    this.obsService.setObsParcours(value)
    // console.log(`ngOnInit:${this.parcours}`)
    // this.obsService.obsParcoursSubject.subscribe({
    //   next:(c:string)=>console.log(`C:${c}`)
    // })
  }
  ngOnInit(){
    this.firedColor(this.parcours)
    
  }
}
