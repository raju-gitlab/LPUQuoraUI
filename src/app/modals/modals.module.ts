import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    CreatePostComponent
  ]
})
export class ModalsModule { }
