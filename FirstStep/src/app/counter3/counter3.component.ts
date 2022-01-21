import { Component, OnInit } from '@angular/core';
import { CountService } from '../servises/count.service';
import { LocalCountService } from '../servises/local-count.service';

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.scss'],
  providers: [LocalCountService],
})
export class Counter3Component implements OnInit {
  constructor(
    public localCountService: LocalCountService,
    public countService: CountService
  ) {}

  ngOnInit(): void {}
}
