import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appProp]',
  standalone: true
})
export class AppPropDirective {

  @Output('action')
  action = new EventEmitter<string>();

  @HostBinding('attr.maxlength')
  max: number = 10;

  @HostBinding('attr.minlength')
  min: number = 3;

  constructor() {
  }

  @HostListener('keyup', ['$event.target.value'])
  onTyping(data: any) {
    if (data.length < this.min) {
      this.action.emit(`Enter at least ${this.min} character`);
    } else if (data.length >= this.min && data.length < this.max) {
      this.action.emit('');
    } else {
      this.action.emit(`Reached max char limit of ${this.max} characters`);
    }
  }

  @HostListener("focusout", ["$event.target.value"])
  onBlur(data: any) {
    this.action.emit(`focusout ${data}`)
  }

  @HostListener("focusin", ["$event.target.value"])
  onFocus(data: any) {
    this.action.emit(`focusin ${data}`)
  }


  // @HostListener('blur')
  // onblur2() {
  //   this.action.emit('blur')
  // }
  //
  // @HostListener('focus')
  // onFocus2() {
  //   this.action.emit('focus')
  // }
}
