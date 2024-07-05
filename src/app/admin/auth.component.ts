import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../model/auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;


  constructor(private router: Router,
              private authService: AuthService) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            console.log('successfully login ...')
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        })
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }


}
