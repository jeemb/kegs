import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="selectedKeg">
    <label>Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label>Brand</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>Price</label>
    <input [(ngModel)]="selectedKeg.price">
    <label>Alcohol Content</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() selectedKeg: Keg[];
  @Output() clickSender = new EventEmitter();


  finishedEditing() {
    this.clickSender.emit();
  }

}
