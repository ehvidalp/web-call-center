import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss']
})
export class CoreLayoutComponent implements OnInit {

  extendedMain = false;

  constructor() { }

  ngOnInit(): void {
  }

  getExtendedMain(extendedMain: boolean){
    this.extendedMain = extendedMain
  }

}
