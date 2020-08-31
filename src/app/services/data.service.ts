import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {
  private messageSource = new BehaviorSubject<number>(0);
  currentProjectID = this.messageSource.asObservable();

  private projectSelection = new BehaviorSubject<boolean>(false);
  isProjectSelected = this.projectSelection.asObservable();

  constructor() { }

  changeProjectID(projectID: number) {
    this.messageSource.next(projectID);
    alert('changed')
  }

  projectSelectionChange(isSelected: boolean) {
    this.projectSelection.next(isSelected);
  }
}
