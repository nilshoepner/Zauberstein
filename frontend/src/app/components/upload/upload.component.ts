import { Component } from '@angular/core';
import { UploadServiceService } from '../../services/upload-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

    eventName='';
    eventDate= new Date();

    constructor(private uploadService:UploadServiceService) {}

    async onFileSelected(input:any) {
      const files = input.target?.files; 
      if(files){
        if (files.length > 0) {
          const file = files.item(0);

          if(files.length !== 1){
            console.warn('Bitte wähle nur eine Datei aus.');
            return
          }
          
          if(file && !file.name.toString().endsWith('.pdf')){
            console.warn('Bitte überprüfe das wirklich eine Pdf ausgewählt war.');
            return;
          }

          const result = await lastValueFrom(this.uploadService.uploadPdf(file,{name:'test',date:new Date()}));
          
          if(result){
            // TODO close dialog, zeig snackbar mit erfolggsnachricht.
            return;
          }
        }
      }
    }

    

}
