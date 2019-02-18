# Reactive form

## Cos'è

Esistono due diversi approcci ai form in Angular. La prima categoria sono i _moduli basati su modelli_.
Usando questo metodo, crei tramite dei tag delle caselle di input in HTML e poi usi le direttive tramite un ngModel 
per associare il loro valore alla variabile di un componente. 

Esistono poi le __reactive form__: la struttura del modulo è definita nel codice. Le reactive form forniscono un approccio guidato dal modello alla gestione degli input form i cui valori cambiano nel tempo. 
Questa guida mostra come creare e aggiornare un semplice controllo del modulo, passare all'utilizzo di più controlli 
in un gruppo, convalidare i valori dei moduli e implementare moduli più avanzati.

Una form reattiva è solo un modulo HTML che è stato cablato con RxJS per gestire il suo stato come flusso in tempo reale. 
Ciò significa che puoi ascoltare le modifiche al suo valore come Osservabile e reagire di conseguenza con errori di 
validazione, feedback, operazioni di database, ecc.


_src/app/form/form.component.ts_

```
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      txtTitolo: new FormControl(),
      txtAutore: new FormControl(),
      txtSinossi: new FormControl()
    });
  }
  getInfo() {
   console.log(this.myForm.value);
}
}
```

_src/app/form/form.component.html_

```
<form [formGroup]="myForm">
  <div>
    <label for="txtTitolo">Titolo</label>
    <input type="text" formControlName="txtTitolo">
  </div>
  <div>
    <label for="txtAutore">Autore</label>
    <input type="text" formControlName="txtAutore">
  </div>
  <div>
    <label for="txtSinossi">Testo</label>
    <textarea formControlName="txtSinossi"></textarea>
  </div>
  <button type="button" (click)="getInfo()">Invia</button>
</form>
```
src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticoloComponent } from './articolo';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
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
```

## Link utili
- [Tutorial per form innestati](https://angularfirebase.com/lessons/basics-reactive-forms-in-angular/)
