import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { UploadComponent } from './upload/upload.component';


@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zauberstein';
  
  constructor(private router: Router, private dialog: MatDialog){}

 openUpload(){
    this.dialog.open(UploadComponent,undefined);
  }

  openLandingPage(){
    this.router.navigate(['/',''])
  }
}
