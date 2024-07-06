import {Component} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {CounterDirective} from "./counter.directive";
import {Cart} from "../model/cart.model";
import {CartSummaryComponent} from "./cart-summary.component";
import {Router, RouterLink} from "@angular/router";
import {TooltipModule} from "ngx-bootstrap/tooltip";

@Component({
  selector: 'store',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    CounterDirective,
    CartSummaryComponent,
    RouterLink
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  public selectedCategory: string | null = null;
  public productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) {
  }

  get products(): Product[] {
    // return this.repository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): (string | undefined)[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory || null;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number = this.productsPerPage) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    // this.router.navigateByUrl("/cart");

    this.router.navigateByUrl('/cart').then(() => {
      // Do something
    });


  }

}
