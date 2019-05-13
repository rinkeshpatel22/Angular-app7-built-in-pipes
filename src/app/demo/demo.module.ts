import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPipesComponent } from './demo-pipes.component';

@NgModule({
  declarations: [DemoPipesComponent],
  exports: [DemoPipesComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
