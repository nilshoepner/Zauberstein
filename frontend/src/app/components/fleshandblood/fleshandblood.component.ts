import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { CategoryEnum, UploadServiceService } from 'src/app/services/upload-service.service';
import { base64toBlob } from 'src/app/shared/base64-to-blob';

@Component({
  selector: 'app-fleshandblood',
  templateUrl: './fleshandblood.component.html',
  styleUrls: ['./fleshandblood.component.scss']
})
export class FleshandbloodComponent {
  events:any;
  
  constructor(private sanitizer: DomSanitizer,private uploadService:UploadServiceService){}

  async download(){
    this.events= await lastValueFrom(this.uploadService.getNewestPerCategory(CategoryEnum.fleshNblood));
    
    const blob = base64toBlob(this.events[0].bytes)
    let blobUrl = URL.createObjectURL(blob);
    blobUrl += '#view=fit&toolbar=0&navpanes=0';
    
    this.events[0].bytes =  this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
  }

  ngOnInit(){
    this.download();
  }
}
