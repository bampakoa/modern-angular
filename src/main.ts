import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { productRoutes } from './app/products/products.routes';
import { routes } from './app/app.routes.';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GoogleMapsModule } from '@angular/google-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, RouterOutlet, ReactiveFormsModule, MatToolbarModule, ClipboardModule, MatFormFieldModule, FormsModule, GoogleMapsModule, YouTubePlayerModule, RouterLink),
        provideHttpClient(withInterceptorsFromDi()), provideRouter([...productRoutes, ...routes]), provideNativeDateAdapter(),
        provideAnimations(),
        provideZonelessChangeDetection()
    ]
})
  .catch(err => console.error(err));
