import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {  MatIconRegistry} from '@angular/material/icon';
import {   MatTableDataSource} from '@angular/material/table';
import {    MatPaginator } from '@angular/material/paginator';
import {     MatSort } from '@angular/material/sort';

import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import {CreateProjectComponent} from '../create-project/create-project.component';
import {DataService} from '../services/data.service';
import { ProjectsListComponent } from '../projects-list/projects-list.component';


@Component({
  selector: 'filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {

  isAllSelected = false;
  categoryID : number = 0



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private service : ProjectService,private router: Router) {}

  createProject () {
    this.dialog.open(CreateProjectComponent)
  }


  ngOnInit() {
  }

  loadAll(){

    this.isAllSelected = true;
  }

  loadProjectList(categoryID: string) {

    this.router.navigate(['/projects/category/'+categoryID+'/'] );
    //window.location.reload();
}

  loadProjectListx(categoryID: string){
    this.router.navigate(['/projects/projectID/'+categoryID+'/']);
  }

  loadProjectListScouting(){
    this.categoryID = 1;
  }

}
