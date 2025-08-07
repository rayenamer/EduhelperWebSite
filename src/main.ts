import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([])),
    provideRouter(routes),
    provideToastr({
      positionClass: 'toast-top-right', 
      preventDuplicates: true,
      closeButton: true,
      timeOut: 4000,
      progressBar: true,
    }),
    provideAnimations(),
  ]
}).catch(err => console.error(err));
