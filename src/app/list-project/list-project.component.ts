import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ListProjectPopupComponent } from '../list-project-popup/list-project-popup.component';
import { ProjectService } from '../services/project.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import {HttpErrorResponse} from '@angular/common/http';
import {  MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {  MatPaginator} from '@angular/material/paginator';
// import * as data from 'projectdata.json';
import {Project} from '../model/project.model';
import {MatSort} from '@angular/material/sort';

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
  displayedColumns: string[] = ['id', 'description', 'name'];
  dataSource: MatTableDataSource<Project>;
  projects: Project[];
  selectedProjectID: number;
  selectedCategoryID: number;
  isProjectSelected: boolean;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dailogRef: MatDialogRef<ListProjectPopupComponent>,
              private route: ActivatedRoute, private router: Router, public service: ProjectService, private http: HttpClient) { }
 // listproject: any = (data as any).default;




  ngOnInit() {
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
    this.getProjectList();


  }
  getProjectList() {
    this.service.listProject().subscribe((data: Project[]) => {
      this.projects = data;
      console.log('getprojectlist**********', data);
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
  onNoClick() {
    this.dailogRef.close();
  }
  triggerProject(projectNumber: number, categoryID: number) {

    this.selectedProjectID = projectNumber;
    this.selectedCategoryID = categoryID;


    this.router.navigate(['projects/category/flowchart/' + categoryID + '/']);
    this.isProjectSelected = true;
    this.onNoClick();

  }


}
