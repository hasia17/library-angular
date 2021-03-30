import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [{path: '', component: TestComponentComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestRoutingModule { }