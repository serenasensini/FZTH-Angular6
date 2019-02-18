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
```

_src/app/form/form.component.html_

```
<h2>Compila il form</h2>
<form [formGroup]="mioForm">
  <div>
    <label for="titolo">Titolo</label>
    <input type="text" formControlName="titolo">
  </div>
  <div>
    <label for="autore">Autore</label>
    <input type="text" formControlName="autore">
  </div>
  <div>
    <label for="sinossi">Testo</label>
    <textarea formControlName="sinossi"></textarea>
  </div>
  <button type="button" (click)="getInfo()">Invia</button>
</form>

<h2>Risultato in tempo reale:</h2>
<p>Titolo inserito:{{this.mioForm.value.titolo}}</p>
<p>Autore inserito:{{this.mioForm.value.autore}}</p>
<p>Sinossi inserito:{{this.mioForm.value.sinossi}}</p>

```

## Link utili
- [Tutorial per form innestati](https://angularfirebase.com/lessons/basics-reactive-forms-in-angular/)
