import {Component} from '@angular/core';
import {OrderRepository} from "../model/order.repository";
import {Order} from "../model/order.model";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
