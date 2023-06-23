import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  route =  'https://zaubersteinbackend.azurewebsites.net/';
  testRoute = 'https://localhost:5175/';


  constructor(private http: HttpClient) { }

  uploadPdf(file:any):Observable<boolean>{
    console.log(file)

    return this.http.post<boolean>(this.route + 'Event/upload', file)
  }
}
