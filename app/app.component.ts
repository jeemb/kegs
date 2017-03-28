import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template:`
  <div class='container'>
    <h1>Hello here are your kegs</h1>
    <keg-list [kegs]="kegs" (clickSender)="selectKeg($event)"></keg-list>
  <edit-keg [selectedKeg]='selectedKeg' (clickSender)="finishedEditing()"></edit-keg>
  <new-keg (newKegSender)="newKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('colorbreak', 'dreamscape', '$200', '5.2%'),
    new Keg('aligator', 'mafioso', '$120', '4.4%'),
    new Keg('fungus', 'honey', '$150', '7.8%')
  ];

  selectedKeg = null;


  selectKeg(keg) {
    if(this.selectedKeg === keg) {
      this.selectedKeg = null;
    } else {
      this.selectedKeg = keg;
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  newKeg(keg) {
    this.kegs.push(keg);
  }
}
