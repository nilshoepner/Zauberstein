import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { UploadServiceService } from 'src/app/services/upload-service.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss']
})
export class MagicComponent implements OnInit {
  events:any;

constructor(private sanitizer: DomSanitizer,private uploadService:UploadServiceService){}

  async download(){
    this.events= await lastValueFrom(this.uploadService.downloadPdf());
    
    const blob = this.base64toBlob(this.events[0].bytes,"application/pdf")
    const blobUrl = URL.createObjectURL(blob);
    
    this.events[0].bytes =  this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
    
  }

  base64toBlob(base64Data: string, contentType: string):Blob {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

  ngOnInit(){
    this.download();
  }
}
