import { Component } from '@angular/core';
import {Cart} from "../model/cart.model";
import {CurrencyPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'cart-summary',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {

  constructor(public cart: Cart) { }


}
