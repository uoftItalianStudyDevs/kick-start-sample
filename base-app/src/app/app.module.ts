import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TemplateNameComponent } from './components/template-name/template-name.component';
import { NewTempalteNameComponent } from './components/template-name/new-tempalte-name/new-tempalte-name.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemplateNameComponent,
    NewTempalteNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
