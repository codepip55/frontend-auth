import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder
  ) { }

  faEmail = faEnvelope;
  faPassword = faLock;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  submitLogin(): void {
    const { email, password } = this.loginForm.value

    // Send to API
  }

}
