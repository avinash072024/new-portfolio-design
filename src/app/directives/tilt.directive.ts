import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]'
})
export class TiltDirective {
  @Input() maxTilt = 15; // max degrees
  @Input() scale = 1.1; // scale on hover
  @Input() speed = 300; // transition-speed in ms

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle("transition", `transform ${this.speed}ms ease`);
    this.setStyle("transformStyle", "preserve-3d");
  }

  private setStyle(prop: string, val: any) {
    this.renderer.setStyle(this.el.nativeElement, prop, val);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const box = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;

    const tiltX = (this.maxTilt / 2 - x * this.maxTilt).toFixed(2);
    const tiltY = (y * this.maxTilt - this.maxTilt / 2).toFixed(2);

    this.setStyle(
      'transform',
      `perspective(600px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${this.scale})`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setStyle(
      'transform',
      `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`
    );
  }

}
