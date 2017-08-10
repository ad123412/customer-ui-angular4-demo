import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Response} from '@angular/http';

@Injectable()
export class DnSubjectService {

  constructor() { }

  invokeEvent: Subject<Response> = new Subject();

  getDnUpdateSubject(){
    return this.invokeEvent;
  }

}
