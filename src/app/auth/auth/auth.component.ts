import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: false
})
export class AuthComponent {  authService = inject(AuthService);


}
