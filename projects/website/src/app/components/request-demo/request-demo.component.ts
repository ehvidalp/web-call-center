import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.scss']
})
export class RequestDemoComponent implements OnInit {
  demoForm!: FormGroup
  siteKey: string = '6LfTGGUaAAAAAFqr2r-pc-PX981mRsIatugcs8sL'
  showMessage = false;

  constructor(
    private formbuilder: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
   }

  ngOnInit(): void {
    this.builderForm()

    // this.recaptchaV3Service.execute('form').subscribe((token) => console.log(token, 'token'))
  }

  sendRequestDemo(){
    if(this.demoForm!.invalid) {
      this.demoForm!.markAllAsTouched()
      return
    }

    this.showMessage = true
  }

  builderForm(){
    this.demoForm! = this.formbuilder.group({
      fullName: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      // recaptcha: ['', Validators.required]
    })
  }

  get df(){
    return this.demoForm!.controls
  }
}
