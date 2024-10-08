import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.css'
})

export class LoginComponent {
  loginForm = new FormGroup({
    usernameForm: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    passwordForm: new FormControl("", [
      Validators.minLength(6),
      Validators.required
    ])
  })

  login() {
    console.log("User logined by UI!");
    this.loginForm.reset();
  }

  get usernameForm() {
    return this.loginForm.get("usernameForm");
  }
  
  get passswordForm() {
    return this.loginForm.get("passwordForm");
  }
}