import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() extendedMain = new EventEmitter<boolean>();
  showFullMain = false;
  chronometer = '00:00:00';
  files = 30;
  money = 225.52;
  userName = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.getLoggedUserName();
  }

  logOut() {
    this.authService.logout();
  }

  showExtendedMain() {
    this.showFullMain = !this.showFullMain;
    this.extendedMain.emit(this.showFullMain);
  }
}
