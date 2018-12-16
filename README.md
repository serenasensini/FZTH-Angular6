# Ts: Angular6

## Getting started
Per installare Angular6, si può utilizzare npm (gestore dei pacchetti per JavaScript); per verificare che npm sia installato, digitare il seguente comando:

`npm -v`

Se il risultato del comando è un numero di versione, come 3.5.2, allora npm è correttamente installato e si può procedere oltre; altrimenti, npm va installato. Per installarlo su Windows, seguire [questa](https://blog.teamtreehouse.com/install-node-js-npm-windows) guida; per installarlo su Ubuntu, seguire [questa](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) guida. Per altre distribuzioni Unix-based, il procedimento è similare, ma ovviamente cambia il gestore dei pacchetti.

Per procedere quindi all'installazione di Angular6, digitare il seguente comando da terminale:

`npm install -g @angular/cli@6`

Per verificare che l'installazione sia andata a buon fine, digitare il seguente comando:

`ng -v `

Se l'output è similare a quanto visto prima, quindi un numero di versione, si può procedere.

## Creare un progetto

Digitare il comando:

`ng new helloworld --style=scss --routing`

dove:
- ng sta per "Angular CLI (Command Line Interface);
- new è un comando per creare;
- hello_world è il nome scelto per il progetto;
- style e routing sono due (dei tanti) parametri opzionali; il primo esplicita che si vuole utilizzare scss per lo stile, il secondo che l'applicazione web avrà diverse pagine collegate tra loro, per cui ng ci aiuterà a creare un file per il routing.

Per visualizzare il progetto (vuoto, per ora!) nel browser, digitare il seguente comando:

`ng serve -o`

L'applicazione web verrà aperta sul browser di default. 

## Struttura del progetto

All'interno della cartella dell'applicazione, ci sono molte cartelle:
- e2e
- node_modules
- src
- ...

Si lavora principalmente all'interno della cartella src, dove ci sono i file principali in HTML, CSS/SCSS e Js; la cartella e2e è una cartella che permette di creare e eseguire dei test chiamati "end-to-end": è una metodologia utilizzata per verificare se il flusso di un'applicazione si sta comportando come progettato dall'inizio alla fine. Lo scopo dell'esecuzione di test end-to-end consiste nell'identificare le dipendenze del sistema e assicurare che vengano trasmesse le informazioni corrette tra i vari componenti e sistemi del sistema. La cartella node_modules invece serve per "raccogliere" tutti i package installati da npm per l'applicativo, in diverse sottocartelle.

Nella cartella /src è possibile notare che ci sono vari file, tra cui un file index.html. Quello è il file visualizzato all'avvio dell'app con il comando eseguito nel precedente paragrafo; nella sottocartella /src/app vengono memorizzati i componenti e i servizi, mentre sotto /src/assets tutte le risorse, come i file grafici. Nel file /src/styles.scss è possibile aggiungere lo stile globale dell'applicativo.

## Cos'è un componente
 Un componente è un singolo elemento dell'interfaccia dell'applicazione web, dotato di caratteristiche proprie e che può essere collegato ad altri componenti. Per generare un componente, digitare il comando:
 
 `ng g c nome_componente`
 
 così che ng si occupi di creare i file HTML, CSS/SCSS e ts associati. A tal proposito, notare che un componente è costituito dai seguenti file:
- un file .html, dove chiaramente si ha il modello;
- un file .scss/css, dove si ha lo stile associato al modello;
- un file .spec.ts per scopo di test;
- un file .ts, che costituisce il vero è proprio componente. Il contenuto di questo file è simile a questo:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
}
```

dove si hanno le importazioni in cima (in questo caso, importiamo solo Component), e poi il decoratore @Component che indica le proprietà di quel componente (nel caso d'esempio, app). Per esempio, il selettore del componente si chiamerà "app-root", così come il file a cui fare riferimento per il modello e lo stile, è indicato nelle proprietà "templateUrl" e "styleUrls".

Comprendere il funzionamento dei componenti è fondamentale: quando si progetta un'applicazione web, è bene avere presente quali elementi devono sempre essere presenti nella pagina web e quali no, come ad esempio una barra di navigazione che dev'essere presente in qualunque pagina del sito, ma così come in molti altri casi. Definire un componente permette di poterlo riutilizzare in qualunque altro componente dello stesso applicativo, e quindi di avere una modularità nel nostro progetto.
 
## Cos'è un servizio
Sono gli elementi che permettono l'implementazione della cosidetta "logica di business" dell'applicazione; in poche parole, sono elementi che offrono funzionalità indipendenti dall'interfaccia web, ma che permettono, tra le altre cose, di fare elaborazioni, chiamare API e inserire dati all'interno delle pagine.

Per creare un servizio, digitare il seguente comando: 

`ng generate service nome_servizio`

Questo comando chiederà a ng di generare un servizio con il nome specificato; verranno quindi creati due file, un file .ts e un .spec.ts, con un funzionamento del tutto simile a quello visto in precedenza. Il contenuto del file .ts sarà molto simile al seguente:

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}

```

In questo caso, si hanno le importazioni in alto, il decoratore @Injectable che definisce ??? e la classe DataService, che prende il nome dal servizio che era stato chiamato "data". Al momento il servizio è vuoto, ma è possibile definire al suo interno vari metodi per il recupero di altri dati, magari da API pubbliche o da database. 

## Routing

Il file /src/app/app-routing.module.ts permette di definire quelli che sono i "link" agli altri componenti dell'applicativo; un esempio del contenuto del file è visibile di seguito.

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

E' del tutto simile a quelli già visti; in alto gli import, poi il decoratore @NgModule che serve a configurare l'iniettore e il compilatore e aiuta a organizzare insieme gli elementi tra loro correlati; acquisisce un oggetto che descrive come compilare il modello di un componente e come creare un iniettore in fase di runtime. Infine, si ha la classe AppRoutingModule, che consiste nel caricare e configurare il router in un modulo separato di livello superiore dedicato al routing e importato dall'AppModule root. Per convenzione, il nome della classe del modulo è AppRoutingModule e appartiene al file app-routing.module.ts.

Si supponga per semplicità che esista un componente chiamato 'users'; nel file suddetto, si può definire il comportamento da adottare, qualora si voglia raggiungere quel componente, modificando il file come segue:

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Si aggiunge quindi all'array Routes il path a cui fa riferimento il componente e il nome dello stesso; in alto, tra le importazioni, si definisce il path necessario a recuperare i file inerenti a quel componente.

## Q&A
- L'estensione .ts per cosa sta? Si tratta dell'estensione TypeScript, linguaggio che utilizza Angular. 
- Quali sono le differenze tra Angular e AngularJS? Moltissime. Per cominciare, Angular si basa su TypeScript mentre AngularJS è basato su JavaScript. AngularJS utilizza termini di scope e controller. Per esplorare una variabile puoi aggiungere molte variabili che saranno visibili sia nelle View che nei Controller. AngularJS ha anche un concetto di rootScope. Le variabili in rootScope sono disponibili su tutte le applicazioni. Angular non ha un concetto di scope o controller. Al posto di loro, utilizza una gerarchia di componenti come principale concetto architettonico. Il componente è una direttiva con un modello. Questo è un approccio simile a ReactJS, un'altra libreria utilizzata per costruire interfacce utente. Inoltre, AngularJS ha molte direttive e ogni sviluppatore può anche specificare una nuova direttiva personalizzata. Angular ha anche direttive standard, ma sono usate in un modo leggermente diverso. Ad esempio: ng-model in AngularJS significa che si desidera creare un bind a doppio senso. Se vuoi creare un one-way binding, dovresti usare ng-bind. Angular usa solo ngModel, ma se lo si scrive in: "[]", si ottiene l'associazione unidirezionale. Se si desidera creare un bind a doppio senso, è necessario scriverlo in: "[()]". In Angular, alcune direttive hanno cambiato il loro nome come ng-repeat in ngFor. Angular, rispetto al vecchio AngularJs ha molti vantaggi, come la modularità: si hanno diversi moduli per ciascuna funzionalità, così da rendere i componenti riutilizzabili.
(cfr. [What’s the difference between AngularJS and Angular?](https://gorrion.io/blog/angularjs-vs-angular/))

## Link utili
- [Angular 6 tutorial](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course)
- [Angular 7 tutorial](https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example)
- [Tutorial ufficiale](https://angular.io/tutorial) (fatto super bene!!!)
- [Tutorial base -parla di Angular2, ma molti concetti sono comunque validi](https://codingjam.it/introduzione-ad-angular-2-parte-1/)
