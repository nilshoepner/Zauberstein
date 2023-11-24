import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  nameInput='';
  pwInput='';

  constructor(private dialogRef:MatDialogRef<AdminLoginComponent>){

  }

  checkPw():void{
    if(this.nameInput === 'benny' && this.pwInput === 'passwort'){
      this.dialogRef.close(true)
    }else{
      window.alert('falsch :P')
    }

  }



}
