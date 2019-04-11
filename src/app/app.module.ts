import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@app/material.module';
import { HeaderModule } from '@app/header/header.module';
import { FooterModule } from '@app/footer/footer.module';
import { WizardModule } from '@app/shared/wizard/wizard.module';
import { WizardComponent } from '@app/shared/wizard/wizard.component';
import { DialogComponent } from '@app/shared/wizard/wizard-dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    WizardModule
  ],
  entryComponents: [WizardComponent, DialogComponent],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
