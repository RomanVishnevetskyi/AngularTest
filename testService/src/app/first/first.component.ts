import { Component, OnInit } from '@angular/core';
import { SomeServiveService } from '../some-servive.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  // providers: [SomeServiveService],
})
export class FirstComponent implements OnInit {
  constructor(private someSrv: SomeServiveService) {
    console.log(someSrv.data);
    someSrv.data = this.someSrv.data + 3;
    console.log(someSrv.data);
  }

  ngOnInit(): void {}
}
