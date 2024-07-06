import { Component } from '@angular/core';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    BsDatepickerModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {

}
