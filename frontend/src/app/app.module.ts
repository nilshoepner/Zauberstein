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
import { AdminLoginComponent } from './components/dialogs/admin-login/admin-login.component';
import { CalenderComponent } from './calender/calender.component';
import { FleshandbloodComponent } from './components/fleshandblood/fleshandblood.component';
import { YugiohComponent } from './components/yugioh/yugioh.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { UploadComponent } from './components/dialogs/upload/upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MagicComponent } from './components/magic/magic.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {MatSelectModule} from '@angular/material/select';
import { WarhammerComponent } from './components/warhammer/warhammer.component';
import { BrettspieleComponent } from './components/brettspiele/brettspiele.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminLoginComponent,
    CalenderComponent,
    FleshandbloodComponent,
    YugiohComponent,
    MagicComponent,
    WarhammerComponent,
    PokemonComponent,
    ImpressumComponent,
    KontaktComponent,
    UploadComponent,
    BrettspieleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FullCalendarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,CommonModule,
    MatIconModule
  ],
 
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: [{ appearance: 'outline' }, { subscriptSizing: "dynamic" }], }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
