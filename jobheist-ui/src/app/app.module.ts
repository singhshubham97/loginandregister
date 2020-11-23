import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RegistrationLoginService} from './registration-login.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HireComponent } from './hire/hire.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { SecuredPageComponent } from './secured-page/secured-page.component'
import { CookieService } from 'ngx-cookie-service';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    HireComponent,
    JobSeekerProfileComponent,
    ChooseRoleComponent,
    ProfileNavbarComponent,
    SecuredPageComponent,
    EditSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],

  providers: [RegistrationLoginService, CookieService],
  bootstrap: [AppComponent],
  entryComponents: [EditSkillsComponent]
})
export class AppModule { }
