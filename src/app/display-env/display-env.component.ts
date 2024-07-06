import { Component } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-display-env',
  standalone: true,
  imports: [],
  templateUrl: './display-env.component.html',
  styleUrl: './display-env.component.css'
})
export class DisplayEnvComponent {

  baseUrl: string = environment.baseUrl;

}
