import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { AuthorizationGuard } from './shared/helpers/authorization.guard';
import { CommonService } from './shared/helpers/common.service';

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
    CommonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
