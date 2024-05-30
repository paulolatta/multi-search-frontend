import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  HttpClientModule,
  HttpFeature,
  HttpFeatureKind,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
  ],
};
