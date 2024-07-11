import {inject, Injectable} from '@angular/core';
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {Product} from "../model/product.model";
import {GtmItem} from "../model/gtm-item";

@Injectable({
  providedIn: 'root'
})
export class GtmDataLayerService {

  private readonly gtmService: GoogleTagManagerService = inject(GoogleTagManagerService);

  private submitEvent(gtmTag: object) {
    this.gtmService.pushTag(gtmTag)
      .catch(error => console.log(`Error submitting event to GTM: {error}`))
  }

  logContentView(url: string): void {
    const hit = {
      event: 'content-view',
      pageName: url
    };
    this.submitEvent(hit);
  }

  logEvent(event: string, category: string, action: string, label: string): void {
    const hit = {
      event: event,
      category: category,
      action: action,
      label: label
    };
    this.submitEvent(hit);
  }

  logCustomDimensionTest(value: object): void {
    const hit = {
      event: 'custom-dimension',
      value: value
    };
    this.submitEvent(hit);
  }

  logLoginEvent(loginMethod: string) {
    const hit = {
      event: 'login',
      method: loginMethod
    };
    this.submitEvent(hit);
  }


  logSignUpEvent(SignupMethod: string) {
    const hit = {
      event: 'sign_up',
      method: SignupMethod
    };
    this.submitEvent(hit);
  }

  logSearchEvent(searchTerm: string) {
    const hit = {
      event: 'search',
      search_term: searchTerm
    };
    this.submitEvent(hit);
  }

  logPurchaseEvent(transactionId: string, price: number, products: Product[]): void {

    const items: GtmItem[] = products.map(p => {
      return {
        item_id: p.id.toString(10)  ,
        item_name: p.name,
        affiliation: "XXX",
        coupon: "",
        discount: 0,
        index: 0,
        item_brand: "",
        item_category: p.category,
        item_category2: "",
        item_category3: "",
        item_category4: "",
        item_category5: "",
        item_list_id: "",
        item_list_name: "",
        item_variant: "",
        location_id: "",
        price: p.price,
        quantity: 1
      }
    });

    const hit = {
      event: 'purchase',
      transaction_id: transactionId,
      // Sum of (price * quantity) for all items.
      value: price,
      tax: 3.60,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: items
    };
    this.submitEvent(hit);
  }

  gtmSubmitRefundEvent(transactionId: string, value: number, products: Product[]): void {

    const items: GtmItem[] = products.map(p => {
      return {
        item_id: p.id.toString(10)  ,
        item_name: p.name,
        affiliation: "XXX",
        coupon: "",
        discount: 0,
        index: 0,
        item_brand: "",
        item_category: p.category,
        item_category2: "",
        item_category3: "",
        item_category4: "",
        item_category5: "",
        item_list_id: "",
        item_list_name: "",
        item_variant: "",
        location_id: "",
        price: p.price,
        quantity: 1
      }
    });


    const hit = {
      event: 'refund',
      transaction_id: transactionId,
      value: value,
      coupon: "SUMMER_FUN",
      shipping: 3.33,
      tax: 1.11,
      items: items
    };
    this.submitEvent(hit);
  }
}
