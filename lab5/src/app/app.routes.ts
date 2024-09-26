import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserLayoutComponent } from '../components/user-layout/user-layout.component';
import { childUserRoutes } from './user.routes';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth/auth-service.service';

export const routes: Routes = [
    { 
        path: 'dashboard', 
        redirectTo: ({queryParams}) => {
            const authService = inject(AuthServiceService);
            if(authService.username.length > 0) {
                return ''
            }
            return 'signin'
        },
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