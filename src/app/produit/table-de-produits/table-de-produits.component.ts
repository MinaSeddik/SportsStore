import {Component, Input, OnInit} from '@angular/core';
import {Model} from "../../repository.model";
import {Product} from "../../model/product.model";
import {IteratorDirective} from "../../directives/iterator.directive";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  NgForOf,
  PercentPipe, SlicePipe,
  UpperCasePipe
} from "@angular/common";
import {AddTaxPipe} from "../../pipes/add-tax.pipe";
import {FormsModule} from "@angular/forms";
import {CategoryFilterPipe} from "../../pipes/category-filter.pipe";

@Component({
  selector: 'app-table-de-produits',
  standalone: true,
  imports: [
    IteratorDirective,
    CurrencyPipe,
    AddTaxPipe,
    DecimalPipe,
    FormsModule,
    CategoryFilterPipe,
    NgForOf,
    PercentPipe,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    JsonPipe,
    SlicePipe
  ],
  templateUrl: './table-de-produits.component.html',
  styleUrl: './table-de-produits.component.css'
})
export class TableDeProduitsComponent implements OnInit{

  @Input("model")
  dataModel: Model;

  constructor() {
  }
  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;
  taxRate: number = 0;
  categoryFilter: string;

  dateObject: Date = new Date(2024, 6, 25);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;
  itemCount: number;

  ngOnInit(): void {
    this.itemCount = this.getProducts().length;
  }

}
