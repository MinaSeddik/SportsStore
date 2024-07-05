import {Component} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Model} from "./repository.model";
import {Product} from "./model/product.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "regular-html5-validation",
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: "./product.form-validation_RegularHtml5.component.html"
})
export class ProductFormValidation_RegularHtml5Component {
  model: Model = new Model();

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  selectedProduct: string;

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }


  tryEvent(value: string) {
    console.log(value)
  }

  tryEvent2(event: Event) {
    console.log(event.type)
    console.log(event.target)
    console.log(event.timeStamp)

    const target = event.target as HTMLTextAreaElement;
    const target2 = event.target as any;
    console.log(target.value)
    console.log(target2.value)
  }

}
