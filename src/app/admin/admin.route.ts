import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layout/admin.layout.component";
import { DashboardComponent } from "./dashboard/dashborad";

export const AdminRoutes: Routes = [
    {
        path: "admin", component: AdminLayoutComponent, children: [
            { path: "", component: DashboardComponent, pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
        ]
    }
]