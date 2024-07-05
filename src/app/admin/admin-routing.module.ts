import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AuthComponent} from "./auth.component";
import {authGuard} from "./auth.guard";
import {ProductEditorComponent} from "./product-editor.component";
import {ProductTableComponent} from "./product-table.component";
import {OrderTableComponent} from "./order-table.component";

const routes: Routes = [
  {path: "auth", component: AuthComponent},
  {
    path: "main", component: AdminComponent, canActivate: [authGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" }
    ]
  },
  {path: "**", redirectTo: "auth"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
