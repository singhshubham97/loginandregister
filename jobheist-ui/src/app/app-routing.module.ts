import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HireComponent } from './hire/hire.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { SecuredPageComponent } from './secured-page/secured-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'job-seeker', component:JobSeekerProfileComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'hire', component:HireComponent},
  {path:'choose', component:ChooseRoleComponent},
  {path:'secured', component:SecuredPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
