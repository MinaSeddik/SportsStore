import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SafeHtmlPipe} from "../pipes/safe-html.pipe";

@Component({
  selector: 'app-route-with-parameter',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './route-with-parameter.component.html',
  styleUrl: './route-with-parameter.component.css'
})
export class RouteWithParameterComponent {

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);




}
