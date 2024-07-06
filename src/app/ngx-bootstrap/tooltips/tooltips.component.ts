import { Component } from '@angular/core';
import {TooltipModule} from "ngx-bootstrap/tooltip";

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [
    TooltipModule
  ],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.css'
})
export class TooltipsComponent {

}
