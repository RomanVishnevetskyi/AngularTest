import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MyngIfDirective } from '../directives/myng-if.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() userNames: Array<string> = [];
  @Input() template?: TemplateRef<{ $implicit: number }>;
  constructor() {}

  ngOnInit(): void {}
}
