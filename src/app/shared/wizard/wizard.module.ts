import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WizardComponent } from '@app/shared/wizard/wizard.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, FormsModule, FlexLayoutModule, ReactiveFormsModule],
    exports: [WizardComponent],
    providers: [],
    declarations: [WizardComponent]
})
export class WizardModule {
}
