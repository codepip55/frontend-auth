import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  faEmail = faEnvelope;
  faPassword = faLock;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  async submitLogin(): Promise<void> {
    const { email, password } = this.loginForm.value;

    // Send to API
    // @ts-ignore
    this.authService.login(email, password)
  }

}
