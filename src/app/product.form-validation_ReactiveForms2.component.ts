import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Product} from "./model/product.model";
import {NgForOf, NgIf} from "@angular/common";
import {LimitValidator} from "./limit.formvalidator";

@Component({
  selector: "reactive-form-validation2",
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: "./product.form-validation_ReactiveForms2.component.html",
  styleUrl: './product.form-validation_ReactiveForms2.component.css'
})
export class ProductFormValidation_ReactiveFormsComponent2 implements OnInit {

  form: FormGroup;
  newProduct: Product = new Product();

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.newProduct.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      category: new FormControl(this.newProduct.category, [Validators.required]),
      price: new FormControl(this.newProduct.price, [
        Validators.required,
        // LimitValidator.Limit(100),
        Validators.pattern("^[0-9\.]+$")]),

      // description: new FormControl(this.newProduct.description, {
      //   validators: [Validators.required], updateOn: "blur"
      // })
    }, {updateOn: "blur"});

  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitFormReactive(form: FormGroup) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
