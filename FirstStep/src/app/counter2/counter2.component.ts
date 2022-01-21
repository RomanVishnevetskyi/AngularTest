import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss'],
})
export class Counter2Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() firstName: string = 'start value';

  constructor() {
    console.log(`constructor`);
    console.log(this.firstName);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    for (let propName in changes) {
      console.log(propName);

      let chng = changes[propName];
      console.log(changes[propName].currentValue);
      console.log(changes[propName].previousValue);

      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.firstName);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  counter: number = 58;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
