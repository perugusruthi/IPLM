import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddProjectPopupComponent } from '../add-project-popup/add-project-popup.component';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgForm } from '@angular/forms';

export interface Category {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<AddProjectPopupComponent>,
              private _router: Router, public service: ProjectService) { }
  addproject: any = [];

   category: Category[] = [
    {value: 1, viewValue: 'Scouting Round'},
    {value: 2, viewValue: 'Prestudy'},
    {value: 3, viewValue: 'DeepDive'},
    {value: 4, viewValue: 'Conceptstudy1'},
    {value: 5, viewValue: 'Questionzero'},
    {value: 6, viewValue: 'Contract'},
    {value: 7, viewValue: 'Kickoff'},
    {value: 8, viewValue: 'Conceptstudy2'},
    {value: 9, viewValue: 'Applicationstudy'},
    {value: 10, viewValue: 'Handover'},
    {value: 11, viewValue: 'Pitch'},
    {value: 12, viewValue: 'Development'},
    {value: 13, viewValue: 'Product'}
];

  ngOnInit() {
    this.resetForm();
  }

  onNoClick() {
    this.dailogRef.close();
   }


onSubmit(form: NgForm) {
  // this.insertRecord(form);
  // console.log(form.value);
  // this.onNoClick();
  console.log('***!3434********');
  this.service.addProject(form.value).subscribe((response) => {
  this.addproject = response;
  console.log('***respon********', this.addproject);

  }, (error) =>{
    console.log('**********error*********', error);

  });

}

insertRecord(form: NgForm) {
    this.service.postProjectDetails(form.value).subscribe(res => {
    this.resetForm(form);
  });
}
resetForm(form?: NgForm) {
  if (form != null) {
   form.resetForm();
  }

  this.service.formData = {
     ProjectId: null,
     ProjectName: '',
     ProjectDescription: '',
     ProjectDate: null,
     CategoryID: null,
     Project_Catchphrases: ''
   };
}


}
