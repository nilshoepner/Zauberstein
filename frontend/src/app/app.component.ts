import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zauberstein';
  
  constructor(private router: Router){}

  openLandingPage(){
    this.router.navigate(['/',''])
  }
}