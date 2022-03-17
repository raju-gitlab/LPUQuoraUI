import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbCarouselConfig, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from './dataservice.service';
import { LoginDialougeComponent } from './login-dialouge/login-dialouge.component';
import { CreatePostComponent } from './modals/create-post/create-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  constructor(private dialog: MatDialog,private config: NgbCarouselConfig,private dataservice : DataserviceService){}
  title = 'ECommerce UI';
  active = 1;

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialougeComponent);
  }
  createpost()
  {
    const dialogRef = this.dialog.open(CreatePostComponent);
  }
  funccall(data : any)
  {
    window.alert(data);
  }
  CheckContent(data : any)
  {
    
  }
}
