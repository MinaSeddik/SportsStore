import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "./order.model";
// import {StaticDataSource} from "./static.datasource";
import {RestDatasource} from "./rest.datasource";

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class OrderRepository {
  private loaded: boolean = false;
  private orders: Order[] = [];

  constructor(private dataSource: RestDatasource) {
  }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }


  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));
    });
  }

}
