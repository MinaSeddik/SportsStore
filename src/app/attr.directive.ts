import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {Product} from "./model/product.model";

@Directive({
  selector: "[pa-attr]",   // like ng-class, ng-model (prefix-name)
  standalone: true
})
export class PaAttrDirective {

  @Input("pa-attr")
  @HostBinding("class")
  bgClass: string;

  @Input("pa-product")
  product: Product;

  @Output("pa-category")
  click = new EventEmitter<string>();

  // // ElementRef: represents the host element
  // constructor(private element: ElementRef) {
  //   this.element.nativeElement.addEventListener("click", (e: any) => {
  //     if (this.product != null) {
  //       this.click.emit(this.product.category);
  //     }
  //   });
  // }

  @HostListener("click")
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }


  // ngOnInit() {
  //   this.element.nativeElement.classList.add(this.bgClass || "bg-success", "text-white");
  // }

  // ngOnChanges(changes: { [property: string]: SimpleChange }) {
  //   let change = changes["bgClass"];
  //   let classList = this.element.nativeElement.classList;
  //   if (!change.isFirstChange() && classList.contains(change.previousValue)) {
  //     classList.remove(change.previousValue);
  //   }
  //   if (!classList.contains(change.currentValue)) {
  //     classList.add(change.currentValue);
  //   }
  // }


}
