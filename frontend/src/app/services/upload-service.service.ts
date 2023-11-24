import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  officialRoute =  'https://zaubersteinbackend.azurewebsites.net/';
  testRoute = 'http://localhost:5175/';
  route = this.officialRoute;

  constructor(private http: HttpClient) { }

  uploadPdf(file:File,rest:IUpload):Observable<boolean>{

    const formData = new FormData();
    if(file){
      formData.append('file', file, file.name);
    }
    return this.http.post<boolean>(this.route + 'Event/upload?name='+rest.name+'&date='+rest.date.toString()+'&category='+rest.category, formData);
  }

  getNewestPerCategory(category:CategoryEnum):Observable<IUpload[]>{    
    return this.http.get<IUpload[]>(this.route + 'Event/get?category='+category);
  }
}

export enum CategoryEnum{
  none=-1,
  magic=0,
  pokemon=1,
  warhammer=2,
  yugioh=3,
  fleshNblood=4,
  brettspiele=5,
}

export interface IUpload{
  name:string;
  date:Date;
  bytes:any[];
  category:CategoryEnum;
}