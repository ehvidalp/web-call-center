import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstBannerComponent } from './components/first-banner/first-banner.component';
import { RequestDemoComponent } from './components/request-demo/request-demo.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SendMessagesComponent } from './components/send-messages/send-messages.component';
import { SecondBannerComponent } from './components/second-banner/second-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';


import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessagesEverywhereComponent } from './components/messages-everywhere/messages-everywhere.component';
import { WhyMessagesComponent } from './components/why-messages/why-messages.component';
import { SendMessagesClientsComponent } from './components/send-messages-clients/send-messages-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstBannerComponent,
    RequestDemoComponent,
    BenefitsComponent,
    TestimonialsComponent,
    SendMessagesComponent,
    SecondBannerComponent,
    FooterComponent,
    HomeComponent,
    MessagesComponent,
    MessagesEverywhereComponent,
    WhyMessagesComponent,
    SendMessagesClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RecaptchaV3Module
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LfTGGUaAAAAAFqr2r-pc-PX981mRsIatugcs8sL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
