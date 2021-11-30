import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Service
import { AuthenticateService } from './login/services/authenticate.service';

// Module
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { SignInModule } from './sign-in/sign-in.module';

const libraries = [FormsModule, HttpClientModule];

const modules = [AdminModule, HomeModule, SignInModule, SignUpModule];

const services = [AuthenticateService];

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
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
