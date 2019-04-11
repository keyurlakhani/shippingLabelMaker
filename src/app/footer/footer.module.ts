import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '@app/footer/footer.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, FormsModule, FlexLayoutModule],
    exports: [FooterComponent],
    providers: [],
    declarations: [FooterComponent]
})
export class FooterModule {
}
