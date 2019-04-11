import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

export enum ShippingOption {
    Ground = 1,
    Priority = 2,
}

@Component({
    selector: 'app-dialog-component',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
})
export class DialogComponent {
    shippingRate = 0.40;
    shippingCost: any;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.shippingCost = parseFloat(this.data.weight.weight) * this.shippingRate *
            (this.data.shippingOption.shippingoption === ShippingOption.Ground ? 1 : 1.5);
    }

}
