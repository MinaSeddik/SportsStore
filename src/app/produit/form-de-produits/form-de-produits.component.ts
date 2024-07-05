import {Component, EventEmitter, Output} from '@angular/core';
import {ProductFormGroup} from "../../model/form.model";
import {Product} from "../../model/product.model";
import {ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-form-de-produits',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './form-de-produits.component.html',
  styleUrl: './form-de-produits.component.css'
})
export class FormDeProduitsComponent {

  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  @Output("prdduitNiveau")
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      console.log(`FormDeProduitsComponent will emit ${JSON.stringify(this.newProduct)}`)
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}
