import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'voter-component',
  templateUrl: './voter-component.component.html',
  styleUrls: ['./voter-component.component.css']
})
export class VoterComponentComponent {

  @Input() parentQuestion: string = ""
  @Input() parentYesAnswer: string = ""
  @Input() parentNoAnswer: string = ""

  @Output() output = new EventEmitter<boolean>()


  vote(event: any, answer: boolean) {
    event.preventDefault()
    this.output.emit(answer)
  } 

}
