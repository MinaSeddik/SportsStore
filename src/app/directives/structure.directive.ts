import {Directive, Input, OnChanges, SimpleChange, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: "[paIf]",
  standalone: true
})
export class StructureDirective implements OnChanges {

  @Input("paIf")
  expressionResult: boolean;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>) {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["expressionResult"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }

}
