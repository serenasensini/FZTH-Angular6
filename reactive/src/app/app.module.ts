import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
