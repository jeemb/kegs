import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <div class='container'>
    <h1>Recipies</h1>
    <h3> here are your stupid recipies </h3>
    <ul>
      <li *ngFor="let recipie of recipies">{{recipie.description}} needs {{recipie.ingredients}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  recipies: Recipie[] = [
    new Recipie("pasta", ['noods','sauce','italyf']),
    new Recipie("shrimp", ['water','fish','small eyes'])
  ];
}


export class Recipie {
  constructor(public description: string, public ingredients: array) { }
}
