import {Injectable} from "@angular/core";
import {Product} from "./product.model";
// import {StaticDataSource} from "./static.datasource";
import {RestDatasource} from "./rest.datasource";


// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: RestDatasource) {
    dataSource.getProducts().subscribe(data => {

      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)  // unique values of categories
        .sort();

    });
  }

  getProducts(category: string | null): Product[] {
    return this.products
      .filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product {
    return <Product>this.products.find(p => p.id == id);
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
        });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p => p.id == id), 1);
    })
  }


}
