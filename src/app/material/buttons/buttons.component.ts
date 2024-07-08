import { Component } from '@angular/core';
import {MatAnchor, MatButton, MatFabButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    MatIcon,
    MatFabButton,
    MatDivider,
    MatMiniFabButton
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
