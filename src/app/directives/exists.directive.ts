import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExists]'
})
export class ExistsDirective implements OnInit {

  @Input() appExists: boolean = false;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!this.appExists) {
      this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.elem.nativeElement, 'display', 'block');
    }
  }

}
