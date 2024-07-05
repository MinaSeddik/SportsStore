import {Injectable} from "@angular/core";
import {Model} from "../repository.model";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "./product.model";
import {RestDatasource} from "./rest.datasource";

@Injectable({
  providedIn: 'root'
})
export class ModelResolver {
  constructor(
    private model: Model,
    private dataSource: RestDatasource) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Product[]> {
    return this.model.getProducts().length == 0
      ? this.dataSource.getData() : null;
  }
}
