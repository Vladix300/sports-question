import { Component } from '@angular/core';

@Component({
  selector: 'enter-component',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent {

  public joueurs: Array<string> = []

  
  addNew(name: string) {

    if(name.length !== 0) {
    this.joueurs.push(name)
    }
  
  }
}
