import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserLayoutComponent } from '../components/user-layout/user-layout.component';
import { childUserRoutes } from './user.routes';

export const routes: Routes = [
    { 
        path: '1', 
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: "",
        component: UserLayoutComponent,
        title: "home",
        children: childUserRoutes
    },
    {
        path: "dashboard", 
        component: DashboardComponent,
        title: "Dashboard"
    },
    
];
