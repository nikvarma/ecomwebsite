import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./error/404/404.error";
import { CategorieComponent } from "./categorie/categorie.component";
import { ProductComponent } from "./product/product.component";

export const AppRoutes: Routes = [
    {
        path: "", component: LayoutComponent, children: [
            {
                path: "", component: HomeComponent, pathMatch: "full"
            },
            {
                path: ":categorie", component: CategorieComponent
            },
            {
                path: ":categorie/:categorieid", component: CategorieComponent
            },
            {
                path: ":categorie/:categorieid/:product", component: ProductComponent
            },
            {
                path: ":categorie/:categorieid/:product/:productid", component: ProductComponent
            }
        ]
    },
    {
        path: "**", component: NotFoundComponent
    }
];