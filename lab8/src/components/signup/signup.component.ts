import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  signupForm = new FormGroup({
    usernameForm: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    passwordForm: new FormControl("", [
      Validators.minLength(6),
      Validators.required
    ])
  })

  signup() {
    console.log("User signup by UI!");
    this.signupForm.reset();
  }

  get usernameForm() {
    return this.signupForm.get("usernameForm");
  }
  
  get passwordForm() {
    return this.signupForm.get("passwordForm");
  }
}
