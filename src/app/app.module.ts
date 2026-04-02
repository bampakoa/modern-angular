import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { GoogleMapsModule } from '@angular/google-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { routes } from './app.routes.';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CartComponent } from './cart/cart.component';
import { productRoutes } from './products/products.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth/auth.component';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapComponent } from './map/map.component';
import { PlayerComponent } from './player/player.component';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    RouterOutlet,
    AuthComponent,
    ReactiveFormsModule,
    MatToolbarModule,
    ClipboardModule,
    MatFormFieldModule,
    FormsModule,
    GoogleMapsModule,
    YouTubePlayerModule, ButtonsComponent,
    CartComponent,
    PageNotFoundComponent,
    CopyTextComponent,
    MapComponent,
    PlayerComponent, RouterLink], providers: [provideHttpClient(withInterceptorsFromDi()), provideRouter([...productRoutes, ...routes]), provideNativeDateAdapter()] })
export class AppModule { }
