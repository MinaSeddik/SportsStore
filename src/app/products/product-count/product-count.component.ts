import {ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import {Model} from "../../repository.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-count',
  standalone: true,
  imports: [],
  templateUrl: './product-count.component.html',
  styleUrl: './product-count.component.css'
})
export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;

  private category: string;
  constructor(private model: Model,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef,
              activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot
      .forEach(route => route.params.subscribe(params => {
      if (params["category"] != null) {
        this.category = params["category"];
        this.updateCount();
      }
    }))
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts())
      .create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category)
      .length;
  }
}
