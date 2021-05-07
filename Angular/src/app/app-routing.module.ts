import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowUploadDocComponent } from './show-upload-doc/show-upload-doc.component';
import { UploadsuccessComponent } from './uploadsuccess/uploadsuccess.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"loginsuccess" , component:LoginsuccessComponent},
  {path:"registration" , component:RegistrationComponent},
  {path:"login" , component:LoginComponent},
  {path:"show",component:ShowUploadDocComponent},
  {path:"uploaded",component:UploadsuccessComponent},
  {path:"dashboard",component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
