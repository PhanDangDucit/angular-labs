import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/form-auth/form-auth.component';
import { SignupComponent } from '../components/signup/signup.component';

export const childUserRoutes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "signin",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "product-detail/:id", 
        component: ProductDetailComponent,
        title: "product detail"
    }
]