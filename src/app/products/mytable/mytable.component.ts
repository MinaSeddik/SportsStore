import {Component, computed, inject, input, model, OnInit, Signal, signal} from '@angular/core';
import {Model} from "../../repository.model";
import {Product} from "../../model/product.model";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MODES, SharedState} from "../../model/model";
import {toSignal} from "@angular/core/rxjs-interop";
import {RestDatasource} from "../../model/rest.datasource";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HighlightTrigger} from "./mytable.animations";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mytable',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './mytable.component.html',
  styleUrl: './mytable.component.css',
  animations: [HighlightTrigger]
})
export class MyTableComponent implements OnInit {

  // @Input("searchProduct")
  // searchProduct: string;

  searchProduct = input<string>('');
  // searchProduct = input.required<string>({
  //   transform: (value: string) => value.toLowerCase()});

  products = signal<Product[]>([]);
  // filteredProducts = computed(() =>
  //   this.products().filter(p => p.name.includes(this.searchProduct())));

  filteredProducts = computed(() =>
    this.products().filter(p => this.category() === null || p.category === this.category()));

  protected readonly model: Model = inject(Model);
  private readonly activeRoute: ActivatedRoute = inject(ActivatedRoute);
  category = signal<string>(null);

  /*
  private readonly restService: RestDatasource = inject(RestDatasource);
  products2 :Signal<Product[]>  = toSignal(this.restService.getProducts());
  filteredProducts2 = computed(() =>
    this.products2().filter(p => p.name.includes(this.searchProduct())));
*/

  private readonly modell: Model = inject(Model);

  constructor() {
    this.activeRoute.params.subscribe(params => {
      this.category.set(params["category"] || null);
    });
  }


  ngOnInit(): void {
    // this.products.update(values => {
    //   return [...this.modell.getProducts()];
    // });

    this.modell.getData().subscribe(values =>
      this.products.update(x => {return [...values] }))

    console.log('end ngOnInit ...')
  }

  getProduct(key: number): Product {
    return this.modell.getProduct(key);
  }

  getProducts(): Product[] {
    return this.modell.getProducts()
      .filter(p => this.category() === null || p.category === this.category());
  }

  deleteProduct(key: number) {
    this.modell.deleteProduct(key);
  }


  state = model<SharedState>();

  editProduct(key: number) {

    console.log('editProduct called ...')


    // this.state.id = key;
    // this.state.mode = MODES.EDIT;
    let stat: SharedState = new SharedState();
    stat.mode = MODES.EDIT;
    stat.id = key;
    this.state.set(stat);

  }

  createProduct() {
    // this.state.id = undefined;
    // this.state.mode = MODES.CREATE;

    let stat: SharedState = new SharedState();
    stat.mode = MODES.CREATE;
    this.state.set(stat);
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  highlightCategory: string = "";

  getRowState(category: string): string {
    return this.highlightCategory === "" ? "" :
      this.highlightCategory === category ? "selected" : "notselected";
  }


}
