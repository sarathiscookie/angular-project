import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() appHighlighter = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlighter);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.appHighlighter;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
