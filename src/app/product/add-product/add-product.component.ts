import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private DataService: DataserviceService) { }

  SellersList : any;
  ProductForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required)
  });
  getListsofsellers()
  {
    this.DataService.Get("Product/Products").subscribe(data => {
      this.SellersList = data;
      console.log(this.SellersList);
    },
     error => {
       console.error("error in response ");
     })
  }
  SendData() {
    this.DataService.Get("Product/Products").subscribe(data => {
      console.log("request Successfull" + data);
    },
      error => {
        console.error("Response error from API");
      });
    console.log(this.ProductForm.value);
    // window.alert("Form Works Successfully");
  }
  Changevalue(event : any)
  {
    console.log(event);
  }
  getgUID(data : any)
  {
    console.log(data);
  }

  ngOnInit() {
    this.getListsofsellers();
  }

}
