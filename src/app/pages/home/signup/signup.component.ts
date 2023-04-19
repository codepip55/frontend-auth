import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor (
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  signupForm = this.fb.group({
    nameFirst: ['', Validators.required],
    nameLast: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cPassword: ['', Validators.required]
  })

  submitSignUp(): void {
    const { nameFirst, nameLast, email, password } = this.signupForm.value;

    // Send to API
    // @ts-ignore
    this.authService.signup(nameFirst, nameLast, email, password);
  }

}
