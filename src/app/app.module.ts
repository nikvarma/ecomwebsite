import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './error/404/404.error';
import { AdminModule } from './admin/admin.module';
import { SignInUpComponent } from './shared/sign-in-up/sign-in-up.component';
import { AlertComponentDirective } from './shared/directives/alert-box/alert.component.directive';
import { BannerComponentDirective } from './shared/directives/banner/banner.component.directive';
import { UtilityService } from './shared/comman-lib/utility';
import { CategorieComponent } from './categorie/categorie.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    CategorieComponent,
    ProductComponent,
    SignInUpComponent,
    AlertComponentDirective,
    BannerComponentDirective,
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {
      //enableTracing: true,

      useHash: false
    }),
    AdminModule
  ],
  providers: [UtilityService],
  entryComponents: [AlertComponentDirective, SignInUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
