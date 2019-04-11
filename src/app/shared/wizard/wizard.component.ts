import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '@app/shared/wizard/wizard-dialog/dialog.component';


export interface WizardData {
  context: object;
  onAction: (action: string) => void;
}


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class WizardComponent implements OnInit {
  senderFormGroup: FormGroup;
  receiverFormGroup: FormGroup;
  weightFormGroup: FormGroup;
  shippingOptionFormGroup: FormGroup;
  isLinear = true;
  shippingOptions = {
    Ground: 1,
    Priority: 2
  };
  wizardAction = {
    Prev: 1,
    Next: 2,
    End: 3,
  };

  form: any;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    // this.setStates();
    this.senderFormGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      street: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      city: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      zip: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[0-9]*'), Validators.required])],
      state: ['', Validators.compose([Validators.required])]
    });
    this.receiverFormGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      street: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      city: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      zip: ['', Validators.compose([Validators.minLength(5), Validators.pattern('[0-9]*'), Validators.required])],
      state: ['', Validators.compose([Validators.required])]
    });
    this.weightFormGroup = this.formBuilder.group({
      weight: ['', Validators.required]
    });
    this.shippingOptionFormGroup = this.formBuilder.group({
      shippingoption: ['', Validators.required]
    });
  }

  hasSenderError(controlName: string, errorName: string) {
    return this.senderFormGroup.controls[controlName].hasError(errorName);
  }
  hasReceiverError(controlName: string, errorName: string) {
    return this.receiverFormGroup.controls[controlName].hasError(errorName);
  }
  hasWeightError(controlName: string, errorName: string) {
    return this.weightFormGroup.controls[controlName].hasError(errorName);
  }
  hasShippingError(controlName: string, errorName: string) {
    return this.shippingOptionFormGroup.controls[controlName].hasError(errorName);
  }

  action(action) {
    this.form = {
      from: this.senderFormGroup.value,
      to: this.receiverFormGroup.value,
      weight: this.weightFormGroup.value,
      shippingOption: this.shippingOptionFormGroup.value
    };
    if (action === this.wizardAction.End) {
      this.dialog.open(DialogComponent, {
        width: '800px',
        data: this.form
      });
    }
  }

  trackByFn(index) {
    return index;
  }

}
