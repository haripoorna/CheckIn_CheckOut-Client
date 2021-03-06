import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './sign/landing-page/landing-page.component';
import { SignComponent } from './sign/sign.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';

import { StudentComponent } from './dashboard/student/student.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { TrainerComponent } from './dashboard/trainer/trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignComponent,
    SignInComponent,
    StudentComponent,
    AdminComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
      { path: '', redirectTo: 'sign', pathMatch: 'full' },

      {
        path: 'sign', component: SignComponent,
          children: [
          { path: '', redirectTo: 'signin', pathMatch: 'full' },
          { path: 'signin', component: SignInComponent },
          { path: 'landingPage', component: LandingPageComponent }
        ]
      },
      {
        path: 'admin', component: AdminComponent,
        
      },
      {
        path: 'student', component: StudentComponent,
        
      },
      {
        path: 'trainer', component: TrainerComponent,
        
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
