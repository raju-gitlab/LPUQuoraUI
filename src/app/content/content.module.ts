import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { QuestionhomepageComponent } from './questionhomepage/questionhomepage.component';
import { PostshomepageComponent } from './postshomepage/postshomepage.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [QuestionhomepageComponent, PostshomepageComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgMaterialModule,
    HttpClientModule,
    NgbModule
  ],
  exports:[
    QuestionhomepageComponent,PostshomepageComponent
  ]
})
export class ContentModule { }
