import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MainhomeComponent } from './mainhome/mainhome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincomplaintComponent } from './admincomplaint/admincomplaint.component';
import { AdminsolveComponent } from './adminsolve/adminsolve.component';
import { AdmincustomerComponent } from './admincustomer/admincustomer.component';
import { StatusComponent } from './status/status.component';
import { LogoutGuard } from './logout.guard';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  {path:'',  component:MainhomeComponent},

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'userhome', component:UserhomeComponent,canActivate:[LogoutGuard]},
  {path:'file-complaint', component:FileComplaintComponent,canActivate:[LogoutGuard]},
  {path:'mainhome', component:MainhomeComponent},
  {path:'adminhome', component:AdminhomeComponent,canActivate:[LogoutGuard]},
  {path:'admincomplaint', component:AdmincomplaintComponent,canActivate:[LogoutGuard]},
  {path:'adminsolve',component:AdminsolveComponent,canActivate:[LogoutGuard]},
  {path:'admincustomer',component:AdmincustomerComponent,canActivate:[LogoutGuard]},
  {path:'status',component:StatusComponent,canActivate:[LogoutGuard]},
  {path:'solution',component:SolutionComponent,canActivate:[LogoutGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),    
    ReactiveFormsModule,
    BrowserModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
