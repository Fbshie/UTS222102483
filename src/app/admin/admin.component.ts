import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EcommerceComponent } from '../ecommerce/ecommerce.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent,EcommerceComponent,FooterComponent,HeaderComponent,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})


export class AdminComponent {

}
