import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUndeline]'
})
export class UndelineDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('mouseover') onHover() {
    this.textDeco('underline');
  }

  @HostListener('mouseout') onMouseOut() {
    this.textDeco('None');
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
