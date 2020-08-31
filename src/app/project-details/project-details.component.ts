import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Project } from '../model/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

//document upload code
errorMessage: string;
projectIDString : string;
projectID : number;
projects: Project[];
filesToUpload: Array<File>;
selectedFileNames: string[] = [];
public isLoadingData: Boolean = false;
@ViewChild('fileUpload') fileUploadVar: any;
uploadResult: any;
res: Array<string>;




  profileForm: FormGroup;
  showFiller = false;
  
  @Input() selectedProjectID: number;




  constructor(private service : ProjectService,private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.errorMessage = "";
    this.filesToUpload = [];
    this.selectedFileNames = [];
    this.uploadResult = "";
   }

   fileChangeEvent(fileInput: any)
   {
       //Clear Uploaded Files result message
       this.uploadResult = "";
       this.filesToUpload = <Array<File>>fileInput.target.files;

       for (let i = 0; i < this.filesToUpload.length; i++)
       {
           this.selectedFileNames.push(this.filesToUpload[i].name);
       }
   }

   cancelUpload()
   {
       this.filesToUpload = [];
       this.fileUploadVar.nativeElement.value = "";
       this.selectedFileNames = [];
       this.uploadResult = "";
       this.errorMessage = "";
   }

   upload()
   {
       if (this.filesToUpload.length == 0)
       {
           alert('Please select at least 1 PDF files to upload!');
       }
       else if (this.filesToUpload.length > 3) {
           alert('Please select a maximum of 3 PDF files to upload!');
       }
       else
       {
           if (this.validatePDFSelectedOnly(this.selectedFileNames))
           {
               this.uploadFiles();
           }
       }
   }

   UploadFile()
   {
     return this.http.post("http://localhost:2228/api/FileUploading/uploadFile","");
   }

   validatePDFSelectedOnly(filesSelected: string[])
   {
       for (var i = 0; i < filesSelected.length; i++)
       {
           if (filesSelected[i].slice(-3).toUpperCase() != "PDF")
           {
               alert('Please selecte PDF files only!');
               return false;
           }
           else {
               return true;
           }
       }
   }

   uploadFiles()
   {
       this.uploadResult = "";

       if (this.filesToUpload.length > 0)
       {
           this.isLoadingData = true;

           let formData: FormData = new FormData();

           for (var i = 0; i < this.filesToUpload.length; i++)
           {
               formData.append("Resources/Documents", this.filesToUpload[i], this.filesToUpload[i].name);
           }
           let server = "http://localhost:2228"
           let apiUrl = "/api/Upload/UploadFiles";

           this.http.post(apiUrl, formData).pipe(map((res: Response) => res.json()))               
               .subscribe
               (
                   data => {
                       this.uploadResult = data;
                       this.errorMessage = "";
                   },
                   err => {
                       console.error(err);
                       this.errorMessage = err;
                       this.isLoadingData = false;
                   },
                   () => {
                       this.isLoadingData = false,
                           this.fileUploadVar.nativeElement.value = "";
                       this.selectedFileNames = [];
                       this.filesToUpload = [];
                   }
               );
       }
   }


  

  ngOnInit() {
    this.route.paramMap.subscribe(
              params => {
                this.projectIDString = params.get('id');
                
                if(this.projectIDString == undefined || this.projectIDString == null)
                {
                  this.projectID = 0
                }
                else
                {
                  this.projectID = parseInt(this.projectIDString)
                }
              }
            );  
        //this.refreshProjectList();
        
      }

      refreshProjectList(){
        this.service. refreshList().subscribe((data:Project[]) =>
        {
          this.projects = data;
                      
             
        });
        }


       

  onSelectedFile(event) {
    if (event.target.files.lenght > 0) {
      const profile = event.target.files[0];
      this.profileForm.get('profile').setValue(profile);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('name', this.profileForm.get('profile').value);
  }
}
