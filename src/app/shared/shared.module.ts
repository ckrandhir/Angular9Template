import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { MCGridComponent } from './mc-grid/mc-grid.component';



@NgModule({
  declarations: [MCGridComponent],
  imports: [
 
  CommonModule,
    GridModule,
    ExcelModule 
  ],
  exports:[
    CommonModule,
    MCGridComponent,
    ExcelModule 
  ]
})
export class SharedModule { }
