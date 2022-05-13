import { Component, OnInit } from '@angular/core';
import { SomeServiveService } from '../some-servive.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  // providers: [SomeServiveService],
})
export class SecondComponent implements OnInit {
  constructor(private someSrv: SomeServiveService) {
    console.log(someSrv.data);
    someSrv.data = this.someSrv.data + 58;
  }

  ngOnInit(): void {}
}
