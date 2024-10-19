import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HandleErrorInterceptor } from './shared/interceptors/handle-error-interceptor';
import { LoggerInterceptor } from './shared/interceptors/logger-interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppTranslateModule } from './shared/modules/app-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true
    },
    // setup angular material
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true
    }, provideAnimationsAsync(),
    // need to import HttpClientModule before AppTranslateModule because we use it in AppTranslateModule
    importProvidersFrom(HttpClientModule),
    // setup ngx-translate module
    importProvidersFrom(AppTranslateModule.forRoot())
  ]
};
