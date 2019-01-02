import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router'
import { RegistrationComponent } from './components/AuthComponent/RegistrationComponent/registration.component';
import { LoginComponent } from './components/AuthComponent/LoginComponent/login.component';

import { routes } from '../routes/app.public'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
