import { Routes, Route  } from '@angular/router';
import { LoginComponent } from '../app/components/index'
import { RegistrationComponent } from '../app/components/index';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { SalesEntryComponent } from '../app/components/sales-entry/sales-entry.component'
import { SalesListComponent } from '../app/components/sales-list/sales-list.component';

export const routes:Routes = [
    { path :'' ,redirectTo:'login' ,pathMatch:'full' },
    { path :'login' , component:LoginComponent },
    { path :'registration' ,component:RegistrationComponent },
    { path :'dashboard' ,component:DashboardComponent , children:[
        { path:'sales-entry', component:SalesEntryComponent },
        { path:'sales-list', component:SalesListComponent }
    ]}
]