import { Injectable } from '@angular/core';

@Injectable()
export class LocalCountService {
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  constructor() {}
}
