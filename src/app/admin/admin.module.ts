import { NgModule } from "@angular/core";
import { AdminLayoutComponent } from "./layout/admin.layout.component";
import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.route";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashborad";

@NgModule({
    declarations: [
        AdminComponent,
        AdminLayoutComponent,
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],
    providers: []
})

export class AdminModule {

}