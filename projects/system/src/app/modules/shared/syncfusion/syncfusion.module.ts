import { NgModule } from '@angular/core';

import {
  GridModule,
  SearchService,
  PageService,
  SortService,
  ResizeService,
  ToolbarService,
  FilterService,
  ExcelExportService
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [],
  imports: [GridModule],
  exports: [GridModule],
  providers: [
    SearchService,
    ToolbarService,
    PageService,
    SortService,
    ResizeService,
    FilterService,
    ExcelExportService,
  ],
})
export class SyncfusionModule { }
