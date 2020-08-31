import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from '../create-project-popup/create-project-popup.component';

@Component({
  selector: 'project-flowchart-popup',
  templateUrl: './project-flowchart-popup.component.html',
  styleUrls: ['./project-flowchart-popup.component.css']
})
export class ProjectFlowchartPopupComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<ProjectFlowchartPopupComponent>) { }

  category: Category[] = [
    {value: 1, viewValue: 'Steak'},
    {value: 2, viewValue: 'Pizza'},
    {value: 3, viewValue: 'Tacos'}
];
  onNoClick() {
    this.dailogRef.close();
  }
  ngOnInit() {
  }

}
