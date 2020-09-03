import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {NgForm} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  formData: Project;
  list: Project[];
  readonly rootURL = 'http://localhost:2228/api';

  constructor(private http: HttpClient) {

  }

  // private service: ProjectService,
  postProjectDetails(formData: Project) {
    return this.http.post(this.rootURL + '/Project_Details1', formData);
  }

  refreshList(): Observable<Project[]> {
    return this.http.get<Project[]>(this.rootURL + '/Project_Details1/');
  }

  refreshListByID(projectID: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.rootURL + '/Project_Details1/' + projectID + '/');
  }

  addProject(formData: Project) {
    this.formData = formData;
    console.log('****add service****', this.formData);
    return this.http.post( '/addproject', this.formData);
  }
  listProject() {
    console.log('****list service****');
    return this.http.get( '/listproject');
  }

  // console.log('****service****', formData);
  // return this.http.post<Project[]>('/addproject', formData);

}
