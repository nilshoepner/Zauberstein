import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  route =  'zaubersteinbackend.azurewebsites.net/';
  testRoute = 'http://localhost:5175/';


  constructor(private http: HttpClient) { }

  uploadPdf(file:any):Observable<boolean>{
    console.log(file)

    return this.http.post<boolean>(this.route + 'event/upload', file)
  }
}
