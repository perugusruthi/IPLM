import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



export interface Category {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'add-project-popup',
  templateUrl: './add-project-popup.component.html',
  styleUrls: ['./add-project-popup.component.css'],
  providers: [ProjectService]
})
export class AddProjectPopupComponent implements OnInit {
  constructor(
    public dailogRef: MatDialogRef<AddProjectPopupComponent>,
    private _router: Router,
    public service: ProjectService
  ) {}

  // categoryControl = new FormControl('', [Validators.required]);
  addproject: any = [];
  category: Category[] = [
    { value: 1, viewValue: 'Steak' },
    { value: 2, viewValue: 'Pizza' },
    { value: 3, viewValue: 'Tacos' },
  ];

  onNoClick() {
    this.dailogRef.close();
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    console.log('***popup********')
    this.service.addProject(form.value).subscribe(addproject => {
      this.addproject = addproject;
      this.onNoClick();
    });
   // this.insertRecord(form);
   // console.log('*******************', form.value);
  //  this.onNoClick();
  }

  insertRecord(form: NgForm) {
    this.service.postProjectDetails(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }
  resetForm(form?: NgForm) {
    if (form != null) { form.resetForm(); }

    this.service.formData = {
      ProjectId: null,
      ProjectName: '',
      ProjectDescription: '',
      ProjectDate: null,
      CategoryID: null,
      Project_Catchphrases: '',
    };
  }
}
