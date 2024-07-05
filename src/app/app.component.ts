import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {StoreComponent} from "./store/store.component";

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet, StoreComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}
