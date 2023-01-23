import { Component } from '@angular/core';

@Component({
  selector: 'display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent {

  public question: string = 'Pensez-vous que Lionel Messi a passé une meilleure saison que Cristiano Ronaldo en 2022 ?'
  public yesAnswer: string = "Oui ! Absolument !"
  public noAnswer: string = "Non, je pense pas"

  public receivedAnswer: boolean = true


}
