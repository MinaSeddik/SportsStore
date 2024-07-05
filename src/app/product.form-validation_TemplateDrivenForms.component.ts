import {Component} from "@angular/core";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Model} from "./repository.model";
import {Product} from "./model/product.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: "template-driven-validation",
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: "./product.form-validation_TemplateDrivenForms.component.html",
  styleUrl: './product.form-validation_TemplateDrivenForms.component.css'
})
export class ProductFormValidation_TemplateDrivenFormsComponent {
  model: Model = new Model();

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }


  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }

    return messages;
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k)
        .forEach(m => messages.push(m));
    });
    return messages;
  }

}
