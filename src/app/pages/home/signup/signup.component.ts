import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor (
    private fb: FormBuilder
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
  }

}
