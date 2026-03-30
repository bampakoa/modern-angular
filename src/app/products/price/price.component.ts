import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject<MatDialogRef<PriceComponent>>(MatDialogRef);


  price: number | undefined;

  save() {
    this.dialogRef.close(this.price);
  }

}
