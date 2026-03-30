import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        AuthComponent
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule { }
