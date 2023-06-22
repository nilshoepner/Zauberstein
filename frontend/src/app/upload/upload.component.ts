import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  fileName = '';

    constructor(private http: HttpClient,private uploadService:UploadServiceService) {}

    async onFileSelected(event:any) {

        // const file:File = event.target.files[0];

        // if (file) {

        //     this.fileName = file.name;

        //     const formData = new FormData();

        //     formData.append("thumbnail", file);

        //     const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //     upload$.subscribe();
        // }
        await lastValueFrom(this.uploadService.uploadPdf({test:event}));
    }

}
