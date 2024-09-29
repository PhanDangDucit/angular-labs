import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../components/user-layout/user-layout.component';
import { childUserRoutes } from './user.routes';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { childAdminRoutes } from './admin.route';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';

export const routes: Routes = [
    // { 
    //     path: 'dashboard',
    //     redirectTo: ({queryParams}) => {
    //         const authService = inject(AuthServiceService);
    //         if(authService.username.length > 0) {
    //             return 'dashboard'
    //         }
    //         return 'signin'
    //     },
    //     pathMatch: 'full'
    // },
    {
        path: "",
        component: UserLayoutComponent,
        title: "home",
        children: childUserRoutes
    },
    {
        path: "admin", 
        component: AdminLayoutComponent,
        title: "Dashboard",
        children: childAdminRoutes
    },
    {
        path: "**", 
        component: NotfoundComponent,
        title: "not found"
    }
];