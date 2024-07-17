import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from "./store/store.component";
import {CartDetailComponent} from "./store/cart-detail.component";
import {CheckoutComponent} from "./store/checkout.component";
import {StoreFirstGuard} from "./store-first.guard";
import {
  ProductFormValidation_TemplateDrivenFormsComponent
} from "./product.form-validation_TemplateDrivenForms.component";
import {ProductFormValidation_ReactiveFormsComponent} from "./product.form-validation_ReactiveForms.component";
import {ProductFormValidation_RegularHtml5Component} from "./product.form-validation_RegularHtml5.component";
import {ProductFormValidation_ReactiveFormsComponent2} from "./product.form-validation_ReactiveForms2.component";
import {ProductComponent} from "./product/product.component";
import {ProduitComponent} from "./produit/produit.component";
import {ProductsComponent} from "./products/products.component";
import {ViewChildComponent} from "./view-child/view-child.component";
import {ViewSpinnerComponent} from "./view-spinner/view-spinner.component";
import {ScrollSpyComponent} from "./scroll-spy/scroll-spy.component";
import {NotFoundComponent} from "./products/not-found/not-found.component";
import {MyTableComponent} from "./products/mytable/mytable.component";
import {CategoryCountComponent} from "./products/category-count/category-count.component";
import {ProductCountComponent} from "./products/product-count/product-count.component";
import {ModelResolver} from "./model/ model.resolver";
import {NgxBootstrapComponent} from "./ngx-bootstrap/ngx-bootstrap.component";
import {TooltipsComponent} from "./ngx-bootstrap/tooltips/tooltips.component";
import {DatepickerComponent} from "./ngx-bootstrap/datepicker/datepicker.component";
import {ModalComponent} from "./ngx-bootstrap/modal/modal.component";
import {Modal2Component} from "./ngx-bootstrap/modal2/modal2.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {DisplayEnvComponent} from "./display-env/display-env.component";
import {MaterialComponent} from "./material/material.component";
import {ButtonsComponent} from "./material/buttons/buttons.component";
import {PrimeNgComponent} from "./prime-ng/prime-ng.component";
import {AutoCompleteComponent} from "./prime-ng/auto-complete/auto-complete.component";
import {ChartjsComponent} from "./chartjs/chartjs.component";
import {GoogleTagManagerComponent} from "./google-tag-manager/google-tag-manager.component";
import {RouteWithParameterComponent} from "./route-with-parameter/route-with-parameter.component";
import {MultiSelectDropdownComponent} from "./multi-select-dropdown/multi-select-dropdown.component";
import {MultiNgSelectDropdownComponent} from "./multi-ng-select-dropdown/multi-ng-select-dropdown.component";
import {PdfDownloadComponent} from "./pdf-download/pdf-download.component";

const childRoutes: Routes = [
  {
    path: "",
    children: [
      {path: "products", component: ProductCountComponent},
      {path: "categories", component: CategoryCountComponent},
      {path: "", component: ProductCountComponent}],
    resolve: {model: ModelResolver}
  }
];

const ngxBootStrapRoutes: Routes = [
  {
    path: "",
    children: [
      {path: "tooltip", component: TooltipsComponent},
      {path: "modal", component: ModalComponent},
      {path: "modal2", component: Modal2Component},
      {path: "datepicker", component: DatepickerComponent},
      // {path: "", component: NgxBootstrapComponent}
    ]
  }
];

const ngMaterialRoutes: Routes = [
  {
    path: "",
    children: [
      {path: "buttons", component: ButtonsComponent},
    ]
  }
];

const primeNgRoutes: Routes = [
  {
    path: "",
    children: [
      {path: "auto-complete", component: AutoCompleteComponent},
    ]
  }
];

export const routes: Routes = [

  {path: "cart", component: CartDetailComponent, title: "Card title", canActivate: [StoreFirstGuard]},
  {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},

  {
    path: "regular-html-validation",
    component: ProductFormValidation_RegularHtml5Component,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "template-driven-validation",
    component: ProductFormValidation_TemplateDrivenFormsComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "reactive-validation",
    component: ProductFormValidation_ReactiveFormsComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "reactive-validation2",
    component: ProductFormValidation_ReactiveFormsComponent2,
    canActivate: [StoreFirstGuard]
  },

  {path: "products", component: ProductComponent, canActivate: [StoreFirstGuard]},
  {path: "produits", component: ProduitComponent, canActivate: [StoreFirstGuard]},
  {path: "my-products", component: ProductsComponent, canActivate: [StoreFirstGuard]},
  {path: "view-child", component: ViewChildComponent, canActivate: [StoreFirstGuard]},


  // { path: "form/edit", component: ProductsComponent, canActivate: [StoreFirstGuard] },
  // { path: "form/create", component: ProductsComponent, canActivate: [StoreFirstGuard] },
  // https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button
  {path: "form/:mode/:id", component: ProductsComponent, canActivate: [StoreFirstGuard]},
  {path: "form/:mode", component: ProductsComponent, canActivate: [StoreFirstGuard]},

  {path: "show-spinner", component: ViewSpinnerComponent, canActivate: [StoreFirstGuard]},
  {path: "scroll-spy", component: ScrollSpyComponent, canActivate: [StoreFirstGuard]},

  // lazy loading module: mean that this module will be loaded only when the user goes to this route
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module')
      .then((m) => m.AdminModule),
  },

  {path: "does", redirectTo: "show-spinner", pathMatch: "prefix"},


  // {
  //   path: "table",
  //   component: MyTableComponent,
  //   children: [
  //     { path: "products", component: ProductCountComponent },
  //     { path: "categories", component: CategoryCountComponent }
  //   ]
  // },
  {path: "table", component: MyTableComponent, children: childRoutes},
  {path: "table/:category", component: MyTableComponent, children: childRoutes},


  {path: "ngx-bootstrap", component: NgxBootstrapComponent, children: ngxBootStrapRoutes},
  {path: "gallery", component: GalleryComponent},
  {path: "show-env", component: DisplayEnvComponent},
  {path: "material", component: MaterialComponent, children: ngMaterialRoutes},
  {path: "primeng", component: PrimeNgComponent, children: primeNgRoutes},
  {path: "chartjs", component: ChartjsComponent},
  {path: "pdf", component: PdfDownloadComponent},
  {path: "gtm", component: GoogleTagManagerComponent},
  {path: "route-param", component: RouteWithParameterComponent},
  {path: "multi-select-dropdown", component: MultiSelectDropdownComponent},
  {path: "ng-select", component: MultiNgSelectDropdownComponent},

  // otherwise
  {path: "", component: StoreComponent, canActivate: [StoreFirstGuard]},
  // { path: "", redirectTo: "/store", pathMatch: "full" },

  // { path: "**", redirectTo: "/store" },
  {path: "**", component: NotFoundComponent}
];

RouterModule.forRoot(routes, {anchorScrolling: 'enabled'});

