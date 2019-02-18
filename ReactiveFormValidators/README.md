# Reactive Form 

## Proprietà di controllo del modulo

Sono proprietà booleane riguardanti i FormControl. 

- Dirty & Pristine: _dirty_ è vero se l'utente ha cambiato il valore del controllo. L'opposto di _dirty_ è _pristine_;

- Touched & Untouched: un controllo è "touched" se l'utente si focalizza sul controllo. Ad esempio, facendo clic sul controllo rende la proprietà vera. L'opposto di _touched_ è _untouched_;

- Valid & Invalid: è true se non ha alcun validatore o se tutti i validatori hanno verificato il controllo e il risultato è positivo. L'opposto è _invalid_;

Nell'esempio "form-validator", si ha il seguente caso: due campi di input, uno per il nome e uno per l'email, che devono essere entrambi inseriti dall'utente e validati dall'applicazione. 
Questo è possibile grazie ai Validators, ovvero degli oggetti astratti che verificano diverse proprietà sui controlli, come di seguito:

_/src/app/form/form.component.ts_

```
this.mioForm = new FormGroup({
      'name': new FormControl('', [
      //required: il campo dev'essere inserito
        Validators.required,
        //minLength: il campo non è valido se non ha almeno 2 caratteri
        Validators.minLength(2)]),
      'email': new FormControl('', [
      //email: deve rispettare il pattern di un'email
        Validators.required, Validators.email])
    });
```

Per lavorare con i controlli, è possibile gestire gli errori tramite la direttiva ngIf, come di seguito:

_/src/app/form/form.component.html_
```
  <form [formGroup]="mioForm">
  <label>Name</label>
  <input id="name" class="form-control"
       formControlName="name" required >

    <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">

      <div *ngIf="name.errors.required">
        Name is required.
      </div>
      <div *ngIf="name.errors.minlength">
        Name must be at least 2 characters long.
      </div>
     </div>
    ...
```
Per l'elenco completo di proprietà, vedere la [documentazione](https://angular.io/api/forms/Validators)

Nell'esempio è stato anche inserito un esempio di validatore customizzato, che può ovviamente essere esteso a proprio piacimento.
