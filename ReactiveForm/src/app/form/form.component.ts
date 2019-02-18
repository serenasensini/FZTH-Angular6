import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  mioForm: FormGroup;
  constructor() {
    this.mioForm = new FormGroup({
      titolo: new FormControl(),
      autore: new FormControl(),
      sinossi: new FormControl()
    });
  }
  getInfo() {
    console.log(this.mioForm.value);
  }

}
