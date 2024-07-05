import {Component} from "@angular/core";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Model} from "./repository.model";
import {Product} from "./model/product.model";
import {NgForOf, NgIf} from "@angular/common";
import {ProductFormGroup} from "./model/form.model";

@Component({
  selector: "reactive-form-validation",
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: "./product.form-validation_ReactiveForms.component.html",
  styleUrl: './product.form-validation_ReactiveForms.component.css'
})
export class ProductFormValidation_ReactiveFormsComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitFormReactive(reactiveForm: ProductFormGroup) {
    this.formSubmitted = true;
    if (reactiveForm.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      reactiveForm.reset();
      this.formSubmitted = false;
    }
  }
}
