import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS,  } from '@angular/material/form-field';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminLoginComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
 
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: [{ appearance: 'outline' }, { subscriptSizing: "dynamic" }], }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // subscript:SubscriptSizing=
}
