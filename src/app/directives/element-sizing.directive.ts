import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementSizing]'
})
export class ElementSizingDirective implements OnInit {

  @Input() appElementSizing: string = 'inline-block';
  @Input() appElementSizingWidth: string = '20px';
  @Input() appElementSizingHeight: string = '20px';

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'display', this.appElementSizing);
    this.renderer.setStyle(this.elem.nativeElement, 'width', this.appElementSizingWidth);
    this.renderer.setStyle(this.elem.nativeElement, 'height', this.appElementSizingHeight);
  }

}
