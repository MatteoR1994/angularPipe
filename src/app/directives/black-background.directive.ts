import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlackBackground]'
})
export class BlackBackgroundDirective implements OnInit {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'black');
  }

}
