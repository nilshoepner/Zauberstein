import { Component } from '@angular/core';
import { CategoryEnum, IUpload, UploadServiceService } from '../../services/upload-service.service';
import { lastValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  now = new Date();
  currenFile:any;
  fileValid=false;
  category:CategoryEnum = CategoryEnum.none

  categoryEnum = CategoryEnum;

  categories = [
    CategoryEnum.magic,
    CategoryEnum.pokemon,
    CategoryEnum.warhammer,
    CategoryEnum.yugioh,
    CategoryEnum.fleshNblood,
  ]

  uploadForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    date : new FormControl(new Date(),[Validators.required, 
      (control)=>{
        const valueAsDate=new Date(control.value);
        if(valueAsDate < this.now){
          return {dateError:true};
        }
        return null
      }
    ]),
  })

  constructor(private uploadService:UploadServiceService,private dialog:MatDialogRef<UploadComponent>) {}

  onFileSelected(input:any) {
    this.fileValid = true;
    const files = input.target?.files; 
    if(files){
      if (files.length > 0) {
        this.currenFile = files.item(0);

        if(files.length !== 1){
          console.warn('Bitte wähle nur eine Datei aus.');
          this.fileValid = false;
          return
        }
        
        if(this.currenFile && !this.currenFile.name.toString().endsWith('.pdf')){
          console.warn('Bitte überprüfe das wirklich eine Pdf ausgewählt war.');
          this.fileValid = false;
          return;
        }
      }
    }
  }

  async pdfUpload(){
    let result = false;
    if(this.uploadForm.controls.name.value && this.uploadForm.controls.date.value && this.category !== -1){
      result = await lastValueFrom(this.uploadService.uploadPdf(this.currenFile,
        {
          name:this.uploadForm.controls.name.value,
          date:this.uploadForm.controls.date.value,
          category:this.category
        } as IUpload));
    }
      
    if(result){
      this.dialog.close();
      return;
    }
  }
}
