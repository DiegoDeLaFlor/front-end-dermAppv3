import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./public/pages/view/view.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {RegisterFormComponent} from "./public/security/register-form/register-form.component";
import {LoginFormComponent} from "./public/security/login-form/login-form.component";
import {LoginFormDermatologistComponent} from "./public/security/login-form-dermatologist/login-form-dermatologist.component";
import {LoginFormPatientComponent} from "./public/security/login-form-patient/login-form-patient.component";
import {ViewPatientComponent} from "./overview/pages/patient/view-patient/view-patient.component";
import {MyDoctorPatientComponent} from "./overview/pages/patient/my-doctor-patient/my-doctor-patient.component";
import {RemindersPatientComponent} from "./overview/pages/patient/reminders-patient/reminders-patient.component";
import {ProfilePatientComponent} from "./profiles/patient/profile-patient/profile-patient.component";
import {EditProfilePatientComponent} from "./profiles/patient/edit-profile-patient/edit-profile-patient.component";
import {MyFilesPatientComponent} from "./overview/pages/patient/my-files-patient/my-files-patient.component";
import {MessagesPatientComponent} from "./overview/pages/patient/messages-patient/messages-patient.component";
import {HomePatientComponent} from "./overview/pages/patient/home-patient/home-patient.component";
import {TypeOfUserComponent} from "./public/security/type-of-user/type-of-user.component";
import {
  ViewDermatologistComponent
} from "./overview/pages/dermatologist/view-dermatologist/view-dermatologist.component";
import {
  ChatDermatologistComponent
} from "./overview/pages/dermatologist/chat-dermatologist/chat-dermatologist.component";
import {
  AnalyticsDermatologistComponent
} from "./overview/pages/dermatologist/analytics-dermatologist/analytics-dermatologist.component";
import {ListPatientsComponent} from "./history/list-patients/list-patients.component";
import {
  ProfileDermatologistComponent
} from "./profiles/dermatologist/profile-dermatologist/profile-dermatologist.component";
import {
  EditProfileDermatologistComponent
} from "./profiles/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component";
import {InfoPatientSpecificComponent} from "./history/info-patient-specific/info-patient-specific.component";
import {
  ScheduleDermatologistComponent
} from "./overview/pages/dermatologist/schedule-dermatologist/schedule-dermatologist.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'sign-in', component: RegisterFormComponent},
  { path: '', component: ViewComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sign-in', component: RegisterFormComponent},
      { path: 'login', component:LoginFormComponent},
      { path: 'home', component: HomeComponent },
      { path: 'login-dermatologist', component: LoginFormDermatologistComponent },
      { path: 'login-patient', component: LoginFormPatientComponent },
    ]},

  { path: '', component: ViewPatientComponent, children:[
      { path: 'home-patient', component: HomePatientComponent },
      { path: 'files-patient', component: MyFilesPatientComponent },
      { path: 'myDoctor-patient', component: MyDoctorPatientComponent },
      { path: 'messages-patient', component:MessagesPatientComponent},
      { path: 'reminders-patient', component: RemindersPatientComponent },
      { path: 'profile-patient', component: ProfilePatientComponent },
      {path:'edit-profile-patient',component:EditProfilePatientComponent}
    ]},

  { path: 'character', component:TypeOfUserComponent},
  { path: 'dermatologist', component:ScheduleDermatologistComponent},
  {path:'',component:ViewDermatologistComponent,children:[
      // {path:'',component:ScheduleDoctorComponent},
      {path:'chats',component:ChatDermatologistComponent},
      {path:'analytics',component:AnalyticsDermatologistComponent},
      {path:'calendar',component:ScheduleDermatologistComponent},
      {path:'patients',component:ListPatientsComponent},
      {path:'profile',component:ProfileDermatologistComponent},
      {path:'edit-profile',component:EditProfileDermatologistComponent},
      {path: 'infoPatientSpecific', component:InfoPatientSpecificComponent}
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
