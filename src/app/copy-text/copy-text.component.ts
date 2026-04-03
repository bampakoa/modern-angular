import { Component, model } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-copy-text',
    templateUrl: './copy-text.component.html',
    styleUrls: ['./copy-text.component.css'],
    imports: [MatFormField, FormsModule, MatButton, CdkCopyToClipboard, MatIcon]
})
export class CopyTextComponent {
  readonly content = model('');
}
