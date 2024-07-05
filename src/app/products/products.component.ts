import {Component, effect, signal} from '@angular/core';
import {MyTableComponent} from "./mytable/mytable.component";
import {MyFormComponent} from "./myform/myform.component";
import {FormsModule} from "@angular/forms";
import {MyFilterComponent} from "./my-filter/my-filter.component";
import {MyFilter2Component} from "./my-filter2/my-filter2.component";
import {MODES, SharedState} from "../model/model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MyTableComponent,
    MyFormComponent,
    FormsModule,
    MyFilterComponent,
    MyFilter2Component
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  filterTerm : string = '';
  searchTerm : string = '';
  searchTerm2  = signal<string>('');
  state = signal<SharedState>(null);

}
