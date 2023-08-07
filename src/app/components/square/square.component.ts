import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() square: string = '';
  @Input() index: number = 0;
  @Output() onClickSquare: EventEmitter<any> = new EventEmitter();

  onClick(index: number) {
    this.onClickSquare.emit(index);
  }
}
