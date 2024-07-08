import {ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpFeature,
  HttpFeatureKind,
  HttpHandler,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors
} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {loggingInterceptor} from "./interceptors/logging.interceptor";
import {headersInterceptor} from "./interceptors/headers-interceptor.interceptor";
import {httpErrorInterceptor} from "./interceptors/http-error.interceptor";
import {authInterceptor} from "./interceptors/auth.interceptor";
import {environment} from "../environments/environment";


let interceptors: Array<HttpInterceptorFn> = environment.production ?
  [headersInterceptor, authInterceptor, httpErrorInterceptor]
  : [headersInterceptor, authInterceptor, loggingInterceptor, httpErrorInterceptor];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // http client
    provideHttpClient(
      // registering interceptors
      // withInterceptors([headersInterceptor, authInterceptor, loggingInterceptor, httpErrorInterceptor])
      withInterceptors(interceptors)

    ),

    importProvidersFrom([BrowserAnimationsModule]),
    provideAnimationsAsync(),
  ]
};
