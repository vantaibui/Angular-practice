import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

import { SignUpModule } from './sign-up/sign-up.module';
import { SignInModule } from './sign-in/sign-in.module';

import { AuthGuard } from './shared/guards/auth.guard';

const libraries = [FormsModule, HttpClientModule];

const modules = [
  HomeModule,
  AboutUsModule,
  AdminModule,
  ProductsModule,
  UsersModule,
  SignInModule,
  SignUpModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ...libraries,
    ...modules,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
