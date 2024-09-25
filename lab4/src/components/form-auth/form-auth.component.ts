import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  standalone: true,
  imports: [],
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.css'
})
export class FormAuthComponent {
  username: string = "";
  password: string = "";

  userNameForm = new FormControl("");
  authService = inject(AuthServiceService);

  onClick() {
    this.authService.login(this.username, this.password);
  }
}
