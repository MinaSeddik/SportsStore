import {
  ChangeDetectorRef,
  DefaultIterableDiffer,
  Directive, DoCheck,
  Input,
  IterableDiffers,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: "[paForOf]",
  standalone: true
})
export class IteratorDirective implements OnInit, DoCheck {

  private differ: DefaultIterableDiffer<any>;
  private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

  @Input("paForOf")
  dataSource: any;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.differ =
      <DefaultIterableDiffer<any>> this.differs.find(this.dataSource).create();
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.dataSource);
    if (changes != null) {
      console.log("ngDoCheck called, changes detected");
      changes.forEachAddedItem(addition => {
        this.container.createEmbeddedView(this.template,
          new PaIteratorContext(addition.item,
            addition.currentIndex, changes.length));
      });
    }
  }

}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;

  constructor(public $implicit: any,
              public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
}
