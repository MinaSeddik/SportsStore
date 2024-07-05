import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {from, Observable} from "rxjs";
import {Order} from "./order.model";

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class __StaticDataSource {

  private products: Product[] = [
    new Product(1, "ProductModel 1", "Category 1", "ProductModel 1 (Category 1)", 100),
    new Product(2, "ProductModel 2", "Category 1", "ProductModel 2 (Category 1)", 100),
    new Product(3, "ProductModel 3", "Category 1", "ProductModel 3 (Category 1)", 100),
    new Product(4, "ProductModel 4", "Category 1", "ProductModel 4 (Category 1)", 100),
    new Product(5, "ProductModel 5", "Category 1", "ProductModel 5 (Category 1)", 100),
    new Product(6, "ProductModel 6", "Category 2", "ProductModel 6 (Category 2)", 100),
    new Product(7, "ProductModel 7", "Category 2", "ProductModel 7 (Category 2)", 100),
    new Product(8, "ProductModel 8", "Category 2", "ProductModel 8 (Category 2)", 100),
    new Product(9, "ProductModel 9", "Category 2", "ProductModel 9 (Category 2)", 100),
    new Product(10, "ProductModel 10", "Category 2", "ProductModel 10 (Category 2)", 100),
    new Product(11, "ProductModel 11", "Category 3", "ProductModel 11 (Category 3)", 100),
    new Product(12, "ProductModel 12", "Category 3", "ProductModel 12 (Category 3)", 100),
    new Product(13, "ProductModel 13", "Category 3", "ProductModel 13 (Category 3)", 100),
    new Product(14, "ProductModel 14", "Category 3", "ProductModel 14 (Category 3)", 100),
    new Product(15, "ProductModel 15", "Category 3", "ProductModel 15 (Category 3)", 100),
  ]

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
