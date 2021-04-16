import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  hiddenPassword = true;
  errorLogin = false;
  returnUrl: string = '';
  publicIP: string = '';
  errorMsg: string = '*Usuario o contraseña invalido';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.builderForm();
    // reset login status
    //if (this.authService.isLoggedIn()) this.router.navigate(['/']);
    //else this.authService.logout();
    // get return url
    this.returnUrl = this.authService.redirectUrl;
    // get public ip
    this.authService
      .getPublicIP()
      .subscribe((ip: string) => (this.publicIP = ip));
  }

  authentication() {
    if (!this.loginForm!.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.authService
      .login(this.lf.username.value, this.lf.password.value, this.publicIP)
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.loading = false;
          this.errorLogin = true;
          this.errorMsg = error;
        },
        () => {
          this.loading = false;
        }
      );
  }

  builderForm() {
    this.loginForm! = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get lf() {
    return this.loginForm!.controls;
  }
}
