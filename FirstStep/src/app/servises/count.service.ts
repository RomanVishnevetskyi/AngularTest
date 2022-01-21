import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor(public logService: LogService) {}
  counter = 0;
  increment() {
    this.counter++;
    this.logService.log(`${this.counter}`);
  }
  decrement() {
    this.counter--;
    this.logService.log(`${this.counter}`);
  }
}
