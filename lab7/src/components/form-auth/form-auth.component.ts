import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.css'
})
export class FormAuthComponent {
  // username: string = "";
  // password: string = "";

  formLogin = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })
  // userNameForm = new FormControl("");
  // authService = inject(AuthServiceService);

  onSubmit() {
    console.log("", this.formLogin.);
    
    // this.authService.login(this.username, this.password);
  }
}
