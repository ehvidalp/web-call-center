import { Injectable } from '@angular/core';
import { GridLanguage, PagerLanguage } from '../models/syncfusion-language';

@Injectable({
  providedIn: 'root'
})
export class SyncfusionLanguageService {
  pagerLanguage: PagerLanguage = {
    currentPageInfo: '{0} de {1} páginas',
    totalItemsInfo: '({0} registros)',
    firstPageTooltip: 'Primera página',
    lastPageTooltip: 'Última página',
    nextPageTooltip: 'Siguiente página',
    previousPageTooltip: 'Página previa',
    nextPagerTooltip: 'Ir siguiente',
    previousPagerTooltip: 'Ir anterior',
    pagerDropDown: 'Registros por página',
    All: 'Todos',
  }

  gridLanguage: GridLanguage = {
    Search: 'Buscar',
    OKButton: 'ok',
    CancelButton: 'Cancelar',
    ClearFilter: 'Limpiar filtros',
    TextFilter: 'Filtros',
    Equal: 'Igual',
    NotEqual: 'No igual',
    StartsWith: 'Que empiece con ',
    EndsWith: 'Que termine con',
    Contains: 'Que contenga',
    CustomFilter: 'Personalizar filtro',
    ShowRowsWhere: 'Mostrar filas donde',
    CustomFilterPlaceHolder: 'Ingrese valor',
    AND: 'Y',
    OR: 'O',
    MatchCase: 'Coincidencia exacta',
    SelectAll: 'Seleccionar todos',
    EmptyRecord: 'No hay registros',
    Excelexport: 'Exportar a excel',
  }

  constructor() { }
}
