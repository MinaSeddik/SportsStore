import {Component} from '@angular/core';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataService, Person} from "../services/data.service";
import {map} from "rxjs";
import {JsonPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-multi-ng-select-dropdown',
  standalone: true,
  imports: [
    NgMultiSelectDropDownModule,
    NgSelectModule,
    FormsModule,
    JsonPipe,
    UpperCasePipe,
    ReactiveFormsModule
  ],
  templateUrl: './multi-ng-select-dropdown.component.html',
  styleUrl: './multi-ng-select-dropdown.component.css'
})
export class MultiNgSelectDropdownComponent {

  people: Person[] = [];
  selectedPeople: string[] = [];  // assume that the person Ids are strings


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeople()
      .pipe(map((x) => x.filter((y) => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id, this.people[1].id];
      });

  }


  itemSelected(person: Person) {
    console.log(`Selected item: ${JSON.stringify(person)}`)
  }
}
