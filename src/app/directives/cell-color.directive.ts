import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: "td",
  standalone: true
})
export class CellColorDirective {

  @HostBinding("class")
  bgClass: string = "";

  setColor(dark: Boolean) {
    this.bgClass = dark ? "bg-dark" : "";
  }
}
