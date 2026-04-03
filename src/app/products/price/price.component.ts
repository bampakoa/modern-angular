import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.css'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatFormField, MatInput, FormsModule, MatDialogActions, MatButton, MatDialogClose],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
  data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject<MatDialogRef<PriceComponent>>(MatDialogRef);


  readonly price = model<number | undefined>();

  save() {
    this.dialogRef.close(this.price());
  }

}
