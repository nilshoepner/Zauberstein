import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from 'src/app/calender/calender.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'calender',component:CalenderComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'**',component:LandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
