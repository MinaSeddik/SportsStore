import {Component} from '@angular/core';
import {IDropdownSettings, NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.css'
})
export class MultiSelectDropdownComponent {
  dropdownList:any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      {item_id: 1, item_text: 'Mumbai'},
      {item_id: 2, item_text: 'Bangaluru'},
      {item_id: 3, item_text: 'Pune'},
      {item_id: 4, item_text: 'Navsari'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
      {item_id: 5, item_text: 'New Delhi'},
    ];

    this.selectedItems = [
      {item_id: 3, item_text: 'Pune'},
      {item_id: 4, item_text: 'Navsari'}
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
