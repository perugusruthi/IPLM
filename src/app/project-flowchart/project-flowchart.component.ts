import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'project-flowchart',
  templateUrl: './project-flowchart.component.html',
  styleUrls: ['./project-flowchart.component.css']
})
export class ProjectFlowchartComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  eleventhFormGroup: FormGroup;
  twelthFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.eleventhFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.twelthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    

  }

}
