import {Component} from '@angular/core';
import {Model} from "../repository.model";
import {ProductFormGroup} from "../model/form.model";
import {Product} from "../model/product.model";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {PaAttrDirective} from "../attr.directive";
import {TestDirective} from "../directives/test.directive";
import {Test2Directive} from "../directives/test2.directive";
import {AppPropDirective} from "../directives/app-prop.directive";
import {PaModel} from "../directives/twoway.directive";
import {StructureDirective} from "../directives/structure.directive";
import {IteratorDirective} from "../directives/iterator.directive";
import {PaCellColorSwitcher} from "../directives/cell-color-switcher.directive";
import { CellColorDirective } from "../directives/cell-color.directive";


@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    PaAttrDirective,
    TestDirective,
    Test2Directive,
    AppPropDirective,
    FormsModule,
    PaModel,
    StructureDirective,
    IteratorDirective,
    PaCellColorSwitcher
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();

  receivedDataCategory: string;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  formSubmitted: boolean = false;

  submitForm(form: FormGroup) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  public boxData: any = '';
  public message: string;


  handleAction(evt: string) {
    this.message = evt;
  }

  showTable: boolean = true;
  darkColor: boolean = true;

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

}
