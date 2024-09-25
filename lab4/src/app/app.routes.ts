import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "home"
    },
    {
        path: "product-detail/:id", 
        component: ProductDetailComponent,
        title: "product detail"
    },
    {
        path: "dashboard", 
        component: DashboardComponent,
        title: "Dashboard"
    }
];
