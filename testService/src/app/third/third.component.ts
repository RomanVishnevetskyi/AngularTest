import { Component, OnInit } from '@angular/core';
import { SomeServiveService } from '../some-servive.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  providers: [SomeServiveService],
})
export class ThirdComponent implements OnInit {
  constructor(private someSrv: SomeServiveService) {
    console.log(someSrv.data);
  }

  ngOnInit(): void {}
}
