import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Goal 1', 'Goal2']);
  goal = this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
