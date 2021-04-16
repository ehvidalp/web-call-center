import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  @Input() isMessagesPage: boolean | undefined;

  showProducts = false;
  showContact = false;
  isTopLayout = true;
  openMain = false
  isMobile: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  sectionsHtml = [
    { name: '#home', status: false },
    { name: '#sireco', status: false },
    { name: '#messages', status: false },
    { name: '#testimonials', status: false },
    { name: '#contact', status: false },
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

  showMain() {
    this.openMain = true
  }

  @HostListener('window:scroll', ['$event'])
  changesNavbar(event: any) {
    let navbar = document.querySelector('.navbar');

    if (window.pageYOffset > navbar!.clientHeight) {
      if (window.pageYOffset > 100) {
        navbar!.classList.add('bg-navbar');
        this.isTopLayout = false
      }
    } else {
      if (window.pageYOffset < 100) {
        navbar!.classList.remove('bg-navbar');
        this.isTopLayout = true
      }
    }

    if (!this.isMessagesPage) {
      for (let index in this.sectionsHtml) {
        const activeSection = document.querySelector(String(this.sectionsHtml[index].name))?.getBoundingClientRect()
        if (activeSection!.top > 60 === false) {
          this.sectionsHtml.forEach(function (section) {
            section.status = false;
          })
          this.sectionsHtml[index].status = true
        }
      }
    }

  }

}
