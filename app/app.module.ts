import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { SolutionComponent } from './solution/solution.component';  

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    FileComplaintComponent,
    AdminhomeComponent,
    AdmincomplaintComponent,
    AdminsolveComponent,
    AdmincustomerComponent,
    StatusComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
