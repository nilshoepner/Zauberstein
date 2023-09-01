import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  officialRoute =  'http://zaubersteinbackend.azurewebsites.net/';
  testRoute = 'http://localhost:5175/';
  route = this.officialRoute;

  constructor(private http: HttpClient) { }

  uploadPdf(file:File,rest:IUpload):Observable<boolean>{

    const formData = new FormData();
    if(file){
      formData.append('file', file, file.name);
    }

    return this.http.post<boolean>(this.route + 'Event/upload?name='+rest.name+'&date='+rest.date?.toISOString(), formData);
  }

  downloadPdf():Observable<IUpload[]>{    
    return this.http.get<IUpload[]>(this.route + 'Event/get');
  }
}

export interface IUpload{
  name?:string;
  date?:Date;
  bytes?:any[];
}