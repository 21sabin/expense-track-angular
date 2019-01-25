import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router'
import { RegistrationComponent } from './components/AuthComponent/RegistrationComponent/registration.component';
import { LoginComponent } from './components/AuthComponent/LoginComponent/login.component';
import { FormsModule } from '@angular/forms'
import { UserService } from '../app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { routes } from '../routes/app.public';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SalesEntryComponent } from './components/sales-entry/sales-entry.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SalesEntryComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
