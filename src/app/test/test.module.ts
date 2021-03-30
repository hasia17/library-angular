import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule, TestRoutingModule
  ]
})
export class TestModule { }
