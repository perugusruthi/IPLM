import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';



import { ProjectService } from '../services/project.service';
import { observable, Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { ProjectFlowchart1Component } from '../project-flowchart1/project-flowchart1.component';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../services/data.service';
import {  MatTableDataSource} from '@angular/material/table';
import {  MatPaginator} from '@angular/material/paginator';
import {AddProjectComponent} from '../add-project/add-project.component';
import {ListProjectComponent} from '../list-project/list-project.component';





@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'name'];
  dataSource: MatTableDataSource<Project>;
  projects: Project[];
  categoryIDString : string;
  categoryID : number;
  selectedProjectID: number = 122
  isProjectSelected: boolean = false


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private service : ProjectService, private route: ActivatedRoute,private router: Router) {

  }
  addProject() {
    this.dialog.open(AddProjectComponent)
  }
  listProject(){
    this.dialog.open(ListProjectComponent)
  }


  ngOnInit() {
    this.route.paramMap.subscribe(
            params => {
              this.categoryIDString = params.get('id');

              if(this.categoryIDString == undefined || this.categoryIDString == null)
              {
                this.categoryID = 0
              }
              else
              {
                this.categoryID = parseInt(this.categoryIDString)
              }
              this.refreshProjectList();
            }
          );





    console.log(this.categoryID);

  }



  ngOnChange() {

    this.refreshProjectList();
  }


  refreshProjectList(){
  this.service.refreshList().subscribe((data:Project[]) =>
  {
    this.projects = data;

        if(this.categoryID!=0)
        {
          this.projects = data.filter(data => data.CategoryID == this.categoryID );
        }
        else{
          this.projects = data;
        }


    this.dataSource = new MatTableDataSource(this.projects);

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort =  this.sort;



  });
  }


  applyFilter(filterValue: string) {

  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  }



  setupFilter(column1: number, column2:string, column3:string) {
    this.dataSource.filterPredicate = (data, filter: string) => {
      const textToSearch = data[column1] && data[column2].trim().toLowerCase() && data[column3].trim().toLowerCase() ;
      return textToSearch;
    };
  }

  onClick(){

    this.isProjectSelected = true;

   //this._router.navigate(['projects/projectsflowchart']);

  }

  /* handleNotify(eventData: number){
    this.service.refreshList().subscribe((data:Project[]) =>
    {

      this.projects = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  } */




  triggerProject(projectNumber: number) {

    this.selectedProjectID = projectNumber;

    this.router.navigate(['/projects/projectID/'+projectNumber+'/']);
    this.isProjectSelected = true;
  }


}
