import {ContentChild, Directive, Input, OnChanges, SimpleChange} from '@angular/core';
import {CellColorDirective} from "./cell-color.directive";

@Directive({
  selector: 'table',
  standalone: true
})
export class PaCellColorSwitcher implements OnChanges{

  @Input("CellColorDirective")
  modelProperty: Boolean;

  @ContentChild(CellColorDirective)
  contentChild: CellColorDirective;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (this.contentChild != null) {
      this.contentChild.setColor(changes["modelProperty"].currentValue);
    }
  }
}
