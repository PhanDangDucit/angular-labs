import { ManageProductComponent } from "../components/manage-product/manage-product.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

export const childAdminRoutes = [
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "manage-product",
        component: ManageProductComponent
    }
]