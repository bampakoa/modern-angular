import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    imports: [MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  authService = inject(AuthService);


}
