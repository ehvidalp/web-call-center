import { Component, HostListener,  OnInit } from '@angular/core';

@Component({
  selector: 'app-send-messages-clients',
  templateUrl: './send-messages-clients.component.html',
  styleUrls: ['./send-messages-clients.component.scss']
})
export class SendMessagesClientsComponent implements OnInit {
  isCardMessages = false

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    const activeSection = document.querySelector('#clients')?.getBoundingClientRect()

    if(activeSection!.top > 400 === false) this.isCardMessages = true
  }
}
