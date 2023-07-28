import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  obsVar!:any[]
  obsParcours!:string
  obsSubject=new Subject<any[]>()
  obsParcoursSubject=new Subject<string>()
  constructor() { }
  emitSubject(){
    this.obsSubject.next(this.obsVar)
  }
  emitParcoursSubject(){
    this.obsParcoursSubject.next(this.obsParcours)
  }
  setObs(param:any){
    this.obsVar=param
    this.emitSubject()

  }
  setObsParcours(param:string){
    this.obsParcours=param
    this.emitParcoursSubject()
  }
}
