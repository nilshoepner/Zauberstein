import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { UploadComponent } from './components/dialogs/upload/upload.component';
import { AdminLoginComponent } from './components/dialogs/admin-login/admin-login.component';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zauberstein';
  
  constructor(private router: Router, private dialog: MatDialog){}

 async openUpload(){
    const loginSucces = await lastValueFrom(this.dialog.open(AdminLoginComponent).afterClosed());

    if(loginSucces){
      this.dialog.open(UploadComponent);
    }
  }

  openLandingPage(){
    this.router.navigate(['/',''])
  }
}
