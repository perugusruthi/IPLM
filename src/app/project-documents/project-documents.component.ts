import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'project-documents',
  templateUrl: './project-documents.component.html',
  styleUrls: ['./project-documents.component.css']
})
export class ProjectDocumentsComponent implements OnInit {

  profileForm: FormGroup;
  showFiller = false;
  
  constructor() { }

  ngOnInit(){
    
  }
 
  onSelectedFile(event){
    if(event.target.files.lenght > 0)
    {
      const profile = event.target.files[0];
      this.profileForm.get('profile').setValue(profile);
    }
  }

  onSubmit(){
    const formData= new FormData();
    formData.append('name',this.profileForm.get('name').value);
    formData.append('name',this.profileForm.get('profile').value);
    
  }
}
