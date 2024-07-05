import {Component, inject} from '@angular/core';
import {FormDeProduitsComponent} from "./form-de-produits/form-de-produits.component";
import {TableDeProduitsComponent} from "./table-de-produits/table-de-produits.component";
import {Model} from "../repository.model";
import {Product} from "../model/product.model";
import {ToggleViewComponent} from "./toggle-view/toggle-view.component";
import {LogServiceService} from "../services/log-service.service";
import {AuthService} from "../model/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    FormDeProduitsComponent,
    TableDeProduitsComponent,
    ToggleViewComponent
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {

  model: Model = new Model();

  private readonly logServiceService: LogServiceService = inject(LogServiceService);


  // constructor(private readonly logServiceService : LogServiceService) {
  // }


  handleNewProduct($event: Product) {
    console.log(`Received New product: ${JSON.stringify($event)}`)
    this.model.saveProduct($event)
  }


}
