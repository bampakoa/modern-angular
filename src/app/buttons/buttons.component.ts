import { Component } from '@angular/core';
import { MatButton, MatIconButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css'],
    imports: [MatButton, MatIconButton, MatIcon, MatFabButton, MatButtonToggleGroup, MatButtonToggle]
})
export class ButtonsComponent {

}
