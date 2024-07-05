import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-toggle-view',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './toggle-view.component.html',
  styleUrl: './toggle-view.component.css'
})
export class ToggleViewComponent {

  showContent: boolean = true;

}
