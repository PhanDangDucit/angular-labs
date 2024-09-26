import { HomeComponent } from '../components/home/home.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { FormAuthComponent } from '../components/form-auth/form-auth.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

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
    },
    {
        path: "**", 
        component: NotfoundComponent,
        title: "not found"
    },
]