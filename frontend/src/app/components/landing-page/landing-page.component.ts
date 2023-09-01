import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  randomLogoNr: string = '';

  constructor() {
    let rnd = Math.floor(Math.random() * 10);
    while (rnd === 0 || rnd == 9 || rnd === 10) {
      rnd = Math.floor(Math.random() * 10)
    }

    this.randomLogoNr = '/assets/zauberlogo' + rnd + '.jpg'

  }
  


}
