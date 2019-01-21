import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {}
  @HostListener('click') onclick() {
    this.quoteDeco('blue');
  }
  @HostListener('dblclick') onDoubleClicks() {
    this.quoteDeco('none');
  }
   private quoteDeco(action: string) {
     this.elem.nativeElement.style.backgroundColor = action;
   }


}
