# Come installare Bootstrap

> Valido anche per l'installazione di altri componenti CSS/Js

## Requisiti
+ npm installato;
+ progetto inizializzato.

## How TO:
- Installare Bootstrap (o il componente) tramite npm, con il comando:
`npm install bootstrap`
- Verificare che il file package.json contenga la nuova dipendenza sotto l'oggetto "dependencies";
- Aggiornare il file angular.json alla voce "styles", inserendo il path della dipendenza. Le dipendenze, ricordiamo, vengono installate sotto node_modules/bootstrap/dist/path/to/dependency, come nell'esempio seguente:

`
"styles": [
  "styles/bootstrap-3.3.7-dist/css/bootstrap.min.css",
  "styles.scss"
],
`

- Importare sotto src/style.css il file di Bootstrap, come nell'esempio seguente:

`@import '~bootstrap/dist/css/bootstrap.min.css';`

Lo stesso procedimento può essere applicato per installare altri componenti.
