import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path: "", redirectTo: "admin",pathMatch: "full"},
    {path: "admin", component: AdminComponent},
    {path: "ecommerce", component: EcommerceComponent},
    {path: "header", component: HeaderComponent},
    {path: "sidebar", component: SidebarComponent},
    {path: "footer", component: FooterComponent},




];

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class apppRoutes {}