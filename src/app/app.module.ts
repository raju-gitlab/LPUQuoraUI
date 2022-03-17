import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceService } from './dataservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginDialougeComponent } from './login-dialouge/login-dialouge.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ModalsModule } from './modals/modals.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialougeComponent,
    ForgetPasswordComponent
  ],
  entryComponents:[LoginDialougeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    HttpClientModule,
    NgbModule,
    ModalsModule,
    ContentModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
