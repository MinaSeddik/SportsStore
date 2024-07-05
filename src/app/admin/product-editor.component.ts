import {Component} from '@angular/core';
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-editor',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.css'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
