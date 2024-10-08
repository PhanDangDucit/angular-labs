import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { FormAuthComponent } from '../components/form-auth/form-auth.component';
import { HomeComponent } from '../components/home/home.component';

export const childUserRoutes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "signin",
        component: FormAuthComponent
    },
    {
        path: "signup",
        component: FormAuthComponent
    },
    {
        path: "product-detail/:id", 
        component: ProductDetailComponent,
        title: "product detail"
    }
]