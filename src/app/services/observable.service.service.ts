import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  obsVar!:any[]
  obsSubject=new Subject<any[]>()
  constructor() { }
  emitSubject(){
    this.obsSubject.next(this.obsVar)
  }
  setObs(param:any){
    this.obsVar=param
    this.emitSubject()

  }
}
