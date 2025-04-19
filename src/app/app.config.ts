import { HTTP_INTERCEPTORS, provideHttpClient, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';

export const customHttpInterceptor: Provider = { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    customHttpInterceptor
  ]
};
