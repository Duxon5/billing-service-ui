import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { customHttpInterceptor } from './app.config';
import { HomeComponent } from './features/home/home.component';
import { HomeService } from './services/home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    customHttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }