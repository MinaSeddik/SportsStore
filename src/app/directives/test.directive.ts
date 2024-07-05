import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true
})
export class TestDirective {

  @HostBinding('class.box1')
  toggle: boolean = false;

  constructor() {
  }

  @HostListener('mouseleave')
  @HostListener('mouseover')
  onMouseOver() {
    this.toggle = !this.toggle;
  }

}
