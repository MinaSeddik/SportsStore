import {Component, effect, inject, input, OnInit} from '@angular/core';
import {Product} from "../../model/product.model";
import {Model} from "../../repository.model";
import {MODES, SharedState} from "../../model/model";
import {FormsModule, NgForm} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyFormComponent  /* implements DoCheck */ implements OnInit {

  product: Product = new Product();
  protected readonly model: Model = inject(Model);
  // private readonly state: SharedState = inject(SharedState);
  private readonly activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  state = input<SharedState>(); // Non-writable signal

  constructor() {

    this.activeRoute.params.subscribe(params => {
      // this.editing = params["mode"] == "edit";
      let id = params["id"];
      if (id != null) {
        Object.assign(this.product, this.model.getProduct(id) || new Product());
      }
    })

    effect(() => {
      if (this.state()?.mode === MODES.EDIT) {
        Object.assign(this.product, this.model.getProduct(this.state().id));
      } else {
        this.product = new Product();
      }
    });
  }


  get editing(): boolean {
    // return this.state.mode == MODES.EDIT;

    // console.log(`this.state() = ${this.state()}`)
    // console.log(`this.activeRoute = ${this.activeRoute}`)
    // console.log(`this.activeRoute.snapshot = ${this.activeRoute.snapshot}`)
    // console.log(`this.activeRoute.snapshot.url = ${this.activeRoute.snapshot.url}`)
    // console.log()

    if (this.activeRoute.snapshot.params["mode"] === "edit") {
      let id = this.activeRoute.snapshot.params["id"];
      if (id != null) {
        let name = this.activeRoute.snapshot.params["name"];
        let category = this.activeRoute.snapshot.params["category"];
        let price = this.activeRoute.snapshot.params["price"];
        if (name != null && category != null && price != null) {
          this.product.id = id;
          this.product.name = name;
          this.product.category = category;
          this.product.price = Number.parseFloat(price);
        } else {
          Object.assign(this.product, this.model.getProduct(id) || new Product());
        }
      }
    }

    return this.state()?.mode === MODES.EDIT || this.activeRoute.snapshot?.params["mode"] === "edit" || false;
    // return this.state()?.mode === MODES.EDIT || this.activeRoute.snapshot?.url[1]?.path === "edit" || false;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      //this.product = new Product();
      //form.reset();
      this.router.navigateByUrl("/");
    }
  }

  resetForm() {
    this.product = new Product();
  }

  ngOnInit(): void {

    // console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    //
    //
    // if (this.activeRoute.snapshot.params["mode"] === "edit") {
    //   let id = this.activeRoute.snapshot.params["id"];
    //   if (id != null) {
    //     Object.assign(this.product, this.model.getProduct(id) || new Product());
    //   }
    // }
  }

  // lastId: number;
  //
  // ngDoCheck() {
  //   if (this.lastId !== this.state()?.id) {
  //     this.product = new Product();
  //     if (this.state().mode === MODES.EDIT) {
  //       Object.assign(this.product, this.model.getProduct(this.state().id));
  //     }
  //     this.lastId = this.state().id;
  //   }
  // }


}
