import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateURL} from '../validators/test.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  mioForm: FormGroup;

  ngOnInit(): void {
    this.mioForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      'email': new FormControl('', [
        Validators.required, Validators.email]),
      'websiteUrl': new FormControl('', [
        Validators.required,
        //ValidateURL è un validator customizzato; il contenuto si trova sotto ./validators/test.validator.ts
        ValidateURL])
    });
  }

  // ritorna il valore del campo del form
  get name() { return this.mioForm.get('name'); }

  get email() { return this.mioForm.get('email'); }

  get website() { return this.mioForm.get('websiteUrl'); }

  print() {
    console.log(this.mioForm.value); }

}
