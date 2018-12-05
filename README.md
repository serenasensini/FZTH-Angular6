# Js: Angular6

## Getting started
Per installare Angular6, si può utilizzare npm (gestore dei pacchetti per JavaScript); per verificare che npm sia installato, digitare il seguente comando:

`npm -v`

Se il risultato del comando è un numero di versione, come 3.5.2, allora npm è correttamente installato e si può procedere oltre; altrimenti, npm va installato. Per installarlo su Windows, seguire [questa](https://blog.teamtreehouse.com/install-node-js-npm-windows) guida; per installarlo su Ubuntu, seguire [questa](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) guida. Per altre distribuzioni Unix-based, il procedimento è similare, ma ovviamente cambia il gestore dei pacchetti.

Per procedere quindi all'installazione di Angular6, digitare il seguente comando da terminale:

`npm install -g @angular/cli`

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

## Routing

## Q&A
- L'estensione .ts per cosa sta? Si tratta dell'estensione TypeScript, linguaggio che utilizza Angular6. 

## Link utili
- [Angular 6 tutorial](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course)
- [Angular 7 tutorial](https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example)
