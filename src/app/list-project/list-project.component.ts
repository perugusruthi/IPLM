import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ListProjectPopupComponent } from '../list-project-popup/list-project-popup.component';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import {HttpErrorResponse} from "@angular/common/http";
import * as data from 'projectdata.json';

export interface Category {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [ProjectService]
})
export class ListProjectComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<ListProjectPopupComponent>,
              private _router: Router, public service: ProjectService, private http: HttpClient) { }
  listproject: any = (data as any).default;



  ngOnInit () {
    // this.http.get('./mynewfile1.txt').subscribe(
    //   data => {
    //     this.listproject = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     console.log("$$$$$$$$$$$$$$$$$", this.listproject);
    //     console.log("$$$$$$$$$$$$$$$$$", this.listproject[1]);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   }
    // );
    console.log("&&&&&&&&&&&", data);
    console.log("&&&&&&&&&&&", data[0]);




  }
}