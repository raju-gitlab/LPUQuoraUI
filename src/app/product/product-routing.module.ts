import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
  {path:"AddProduct",component:AddProductComponent},
  {path:"ManageProduct",component:ManageProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
