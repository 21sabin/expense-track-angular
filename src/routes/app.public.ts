import { Routes, Route  } from '@angular/router';
import { LoginComponent } from '../app/components/index'
import { RegistrationComponent } from '../app/components/index'

export const routes:Routes = [
    { path :'' ,redirectTo:'login' ,pathMatch:'full' },
    { path :'login' , component:LoginComponent },
    { path :'registration' ,component:RegistrationComponent }
]