import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CartSummaryComponent} from "../store/cart-summary.component";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-ngx-bootstrap',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CartSummaryComponent,
    CurrencyPipe,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './ngx-bootstrap.component.html',
  styleUrl: './ngx-bootstrap.component.css'
})
export class NgxBootstrapComponent {

}
