import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/dialogs/admin-login/admin-login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MagicComponent } from './components/magic/magic.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { YugiohComponent } from './components/yugioh/yugioh.component';
import { FleshandbloodComponent } from './components/fleshandblood/fleshandblood.component';
import { WarhammerComponent } from './components/warhammer/warhammer.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { BrettspieleComponent } from './components/brettspiele/brettspiele.component';

const routes: Routes = [
  // {path:'calender',component:CalenderComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'genres/magic',component:MagicComponent},
  {path:'genres/warhammer',component:WarhammerComponent},
  {path:'genres/pokemon',component:PokemonComponent},
  {path:'genres/yugioh',component:YugiohComponent},
  {path:'genres/fleshandblood',component:FleshandbloodComponent},
  {path:'genres/brettspiele',component:BrettspieleComponent},
  {path:'impressum',component:ImpressumComponent},
  {path:'kontakt',component:KontaktComponent},
  {path:'**',component:LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
