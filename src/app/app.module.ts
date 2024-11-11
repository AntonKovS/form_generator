import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestInputComponent} from './shared/components/test-input/test-input.component';
import {TestSelectComponent} from './shared/components/test-select/test-select.component';
import {TestNumberComponent} from './shared/components/test-number/test-number.component';
import {TestCheckboxComponent} from './shared/components/test-checkbox/test-checkbox.component';
import {TestFormComponent} from './view/components/test-form/test-form.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    // NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
