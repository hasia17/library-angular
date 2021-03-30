import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import {
  ConfigurationService,
  TkitPortalModule
} from 'portal-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TkitPortalModule,
    ReactiveFormsModule,
    CheckboxModule,
    CalendarModule,
    TabViewModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    MultiSelectModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MultiSelectModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    CalendarModule,
    TranslateModule,
    FormsModule,
    TkitPortalModule,
    ReactiveFormsModule,
    TabViewModule,
  ]
})
export class SharedModule {
  constructor(txService: TranslateService, confService: ConfigurationService) {
    confService.lang$.subscribe(lang => {
      txService.use(lang);
    });
  }
}
