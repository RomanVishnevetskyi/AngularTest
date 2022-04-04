import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RXJS';
  closed = false;

  ngOnInit(): void {
    console.log(Observable);

    let observable = new Observable<number | string>(
      (subscribe: Subscriber<number | string>) => {
        subscribe.next(1);
        subscribe.next('test');
        subscribe.complete();
      }
    );
    observable.subscribe({
      next: (value: number | string) => {
        let arr = [];
        arr.push(value);
        console.log(arr.join());
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
