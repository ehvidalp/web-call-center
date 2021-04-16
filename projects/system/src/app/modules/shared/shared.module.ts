import { SyncfusionModule } from './syncfusion/syncfusion.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],

  imports: [CommonModule, MaterialModule, SyncfusionModule],
  exports: [MaterialModule, SyncfusionModule],
})
export class SharedModule {}
