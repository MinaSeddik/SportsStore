import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AuthService} from "../model/auth.service";

@Component({
  selector: 'admin',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
  }

  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/");
  }
}
