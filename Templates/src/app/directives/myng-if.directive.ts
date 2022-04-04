import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[MyngIf]',
})
export class MyngIfDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() {
    const condition = false;
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else this.viewContainer.clear();
  }
}
