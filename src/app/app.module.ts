import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { AuthorizationGuard } from './shared/helpers/authorization.guard';
import { CommonModule } from '@angular/common';

const libraries = [CommonModule, FormsModule, HttpClientModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ...libraries,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD ' },
    JwtInterceptor,
    AuthorizationGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
