import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  outputs: ['addTailEvent', 'addManeEvent', 'addColorEvent'],
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  addTailEvent: EventEmitter<string>;
  addManeEvent: EventEmitter<string>;
  addColorEvent: EventEmitter<string>;

  color: string;

  constructor() {
    this.addTailEvent = new EventEmitter();
    this.addManeEvent = new EventEmitter();
    this.addColorEvent = new EventEmitter();
  }

  addTail(){
    this.addTailEvent.emit();
  }

  addMane(){
    this.addManeEvent.emit();
  }

  addColor(){
    this.addColorEvent.emit(this.color);
  }

  ngOnInit() {
  }

}
