import {Component} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {
  }

  getProducts(): Product[] {
    return this.repository.getProducts(null);
  }

  deleteProduct(id: number | undefined) {
    this.repository.deleteProduct(id);
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

}
