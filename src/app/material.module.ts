import { NgModule } from '@angular/core';
import {
  MatStepperModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatStepperModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatStepperModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
