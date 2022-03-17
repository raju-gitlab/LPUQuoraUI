import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ListManagedProductComponent } from './list-managed-product/list-managed-product.component';
import { SearchProductsComponent } from './search-products/search-products.component';


@NgModule({
  declarations: [AddProductComponent, ManageProductComponent, ListManagedProductComponent, SearchProductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
