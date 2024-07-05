import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../model/product.model";

@Pipe({
  name: 'filter',
  pure: false,
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    return category == undefined ?
      products : products.filter(p => p.category == category);
  }
}
