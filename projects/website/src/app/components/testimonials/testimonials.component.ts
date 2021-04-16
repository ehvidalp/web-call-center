import { Component, HostListener,  OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  isTestimonial = false
  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    const activeSection = document.querySelector('#testimonials')?.getBoundingClientRect()

    if(activeSection!.top > 400 === false) this.isTestimonial = true
  }

}


