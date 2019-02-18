# Material dashboard

## Getting started
Per aggiungere Angular/material, digitare il seguente comando:
`ng add @angular/material`

## Creare una dashboard in stile material
Per generare il componente utilizzando il Material design, digitare il seguente comando:
`ng generate @angular/material:material-dashboard --name dashboard`

Per esempio, utilizzando un approccio tipico a quello della creazione della dashboard, si avrà una bacheca simile a questa:

Basterà utilizzare il sistema a griglia fornito dal Material Design, specificando quante colonne e a quale riga inserire i vari componenti, come visibile dal codice di seguito:

src/app/dashboard.component.ts
```
import { Component } from '@angular/core';  
@Component({  
  selector: 'material-dashboard',  
  templateUrl: './material-dashboard.component.html',  
  styleUrls: ['./material-dashboard.component.css']  
})  
export class MaterialDashboardComponent {  
  // Number of cards to be generated with column and rows to be covered  
  cards = [  
    { title: 'Card 1', cols: 2, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 2 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];  
}
```

src/app/dashboard.component.html
```
<div class="grid-container">  
  <h1 class="mat-h1">Welcome dashboard</h1>  
  <mat-grid-list cols="2" rowHeight="400px">  
    <mat-grid-tile *ngFor="let card of cards" [colspan]="card.cols" [rowspan]="card.rows">  
      <mat-card class="dashboard-card">  
        <mat-card-header>  
          <mat-card-title>  
            {{card.title}}  
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">  
              <mat-icon>more_vert</mat-icon>  
            </button>  
            <mat-menu #menu="matMenu" xPosition="before">  
              <button mat-menu-item>Expand</button>  
              <button mat-menu-item>Remove</button>  
            </mat-menu>  
          </mat-card-title>  
        </mat-card-header>  
        <mat-card-content class="dashboard-card-content">  
          <div>Lorem Ipsum</div>  
        </mat-card-content>  
      </mat-card>  
    </mat-grid-tile>  
  </mat-grid-list>  
</div>
```

src/app/dashboard.component.css
```

.grid-container {  
  margin: 20px;  
}  
.dashboard-card {  
  position: absolute;  
  top: 15px;  
  left: 15px;  
  right: 15px;  
  bottom: 15px;  
}  
.more-button {  
  position: absolute;  
  top: 5px;  
  right: 10px;  
}  
.dashboard-card-content {  
  text-align: center;  
}
```
