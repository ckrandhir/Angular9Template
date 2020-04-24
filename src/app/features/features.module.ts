import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { KendoUIModule } from './../kendo-ui/kendo-ui.module';
import { SharedModule } from './../shared/shared.module';
import { PayersComponent } from './payers/payers.component';



@NgModule({
  declarations: [HomeComponent, PayersComponent],
  imports: [
   SharedModule
  ],

  exports: [
    HomeComponent,
    PayersComponent
  ]
})
export class FeaturesModule { }
