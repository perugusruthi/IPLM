import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageboxComponent } from '../messagebox/messagebox.component';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'Task_Details',
  templateUrl: './expansion-steps-example.component.html',
  styleUrls: ['./expansion-steps-example.component.css']
})
export class ExpansionStepsExampleComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  step = 0;
  durationInSeconds = 5;


  setStep(index: number) {
    this.step = index;
  }



  nextStep() {
    this.step++;
  }


  prevStep() {
    this.step--;
  }

  endStep()
  {
    this.step++;
    this._snackBar.openFromComponent(MessageboxComponent, {
      duration: this.durationInSeconds * 200,
    });


  }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Brehm Holger'},
    {name: 'Shivani Borkar'}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }




}
