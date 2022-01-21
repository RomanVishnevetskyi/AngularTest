import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input() dStyles: {
    border?: string;
    color?: string;
    background?: string;
    borderRadius?: string;
  };
  constructor(private el: ElementRef, private r: Renderer2) {
    this.dStyles = {};
    console.log(el);
    // this.el.nativeElement.style.color = 'yellow';
    // this.el.nativeElement.style.background = 'blue';
    console.log(r);
    // this.r.setStyle(this.el.nativeElement, 'color', 'yellow');
    // this.r.setStyle(this.el.nativeElement, 'background', 'blue');
  }

  @HostBinding('style.cursor') cursor = 'auto';
  @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   console.log(event.target);
  // }
  @HostListener('dblclick', ['$event'])
  onDblclick(event: Event) {
    // console.log(event.target);
    this.cursor = 'pointer';
    this.r.setStyle(this.el.nativeElement, 'color', this.dStyles.color);

    // this.r.setStyle(
    //   this.el.nativeElement,
    //   'background',
    //   this.dStyles.background
    // );
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.r.setStyle(
    //   this.el.nativeElement,
    //   'border-radius',
    //   this.dStyles.borderRadius
    // );
  }
  @HostListener('click') onClick() {
    this.cursor = 'no-drop	';
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'background', null);
  }
}
