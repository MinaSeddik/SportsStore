import { ResolveFn } from '@angular/router';
import {Product} from "../model/product.model";
import {Model} from "../repository.model";
import {inject} from "@angular/core";

export const productResolver: ResolveFn<Product> = (route, state):Product => {

  const productService: Model = inject(Model);

  let productId: number = Number(route.paramMap.get("id"));

  return  productService.getProduct(productId);

};
