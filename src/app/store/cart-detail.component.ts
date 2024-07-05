import { Component } from '@angular/core';
import {Cart} from "../model/cart.model";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ConnectionService} from "../model/connection.service";

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {

  public connected: boolean = true;
  constructor(public cart: Cart, private connectionService: ConnectionService) {
    this.connected = this.connectionService.connected;
    connectionService.Changes.subscribe((state) => this.connected = state);
  }



}
