import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {GtmDataLayerService} from "../services/gtm-data-layer.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-google-tag-manager',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './google-tag-manager.component.html',
  styleUrl: './google-tag-manager.component.css'
})
export class GoogleTagManagerComponent {

  private readonly gtmDataLayerService: GtmDataLayerService = inject(GtmDataLayerService);

  gtmSubmitLoginEvent() {
    this.gtmDataLayerService.logLoginEvent('email');
  }


  gtmSubmitSignUpEvent() {
    this.gtmDataLayerService.logSignUpEvent('email');
  }

  gtmSubmitSearchEvent() {
    this.gtmDataLayerService.logSearchEvent('email');
  }


  gtmSubmitPurchaseEvent() {
    let product: Product = new Product();
    product.id = 1;
    product.name = "T-Short Tommy Hilfiger";
    product.price = 102.56;
    product.description = "T-Short Tommy Hilfiger - XL";

    let products: Product[] = new Array<Product>();
    products.push(product)

    this.gtmDataLayerService.logPurchaseEvent('T_12345', 56.36, products);
  }

  gtmSubmitRefundEvent() {
    let product: Product = new Product();
    product.id = 1;
    product.name = "T-Short Tommy Hilfiger";
    product.price = 102.56;
    product.description = "T-Short Tommy Hilfiger - XL";

    let products: Product[] = new Array<Product>();
    products.push(product)


    this.gtmDataLayerService.gtmSubmitRefundEvent('T_12345', 56.36, products);
  }
}
