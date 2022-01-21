import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input()
  counter: number = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  increment() {
    this.counterChange.emit(this.counter++);
  }
  decrement() {
    this.counterChange.emit(this.counter--);
  }
}
