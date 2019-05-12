import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoParentComponent } from './demo-parent.component';
import { DemochildComponent } from './demochild/demochild.component';

@NgModule({
  declarations: [DemoParentComponent, DemochildComponent],
  exports: [DemoParentComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
