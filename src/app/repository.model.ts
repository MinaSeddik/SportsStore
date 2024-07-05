import {Product} from "./model/product.model";
import {SimpleDataSource} from "./model/datasource.model";
import {Injectable} from "@angular/core";
import {RestDatasource} from "./model/rest.datasource";
import {flatMap, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Model {
  // private dataSource: SimpleDataSource;
  private dataSource: RestDatasource;
  private products: Product[];
  private locator = (p: Product, id: number) => p.id == id;

  constructor() {
    // this.dataSource = new SimpleDataSource();
    this.dataSource = new RestDatasource();
    this.products = new Array<Product>();
    // this.dataSource.getData().forEach(p => this.products.push(p));
    this.dataSource.getData()
      .subscribe(array => array.forEach(item => this.products.push(item)));


    // this.dataSource.getData().subscribe(data => this.products = data);
  }

  getData(): Observable<Product[]>  {
    return this.dataSource.getData();
  }


  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products
        .findIndex(p => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  swapProduct() {
    let p = this.products.shift();
    this.products.push(new Product(p.id, p.name, p.category, '', p.price));
  }

  getNextProductId(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[this.products.length > index + 2 ? index + 1 : 0].id;
    } else {
      return id || 0;
    }
  }

  getPreviousProductId(id: number): number {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[index > 0 ? index - 1 : this.products.length - 1].id;
    } else {
      return id || 0;
    }
  }
}
