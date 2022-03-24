import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { CapitalizeFirstPipe } from 'src/app/components/list/pipes/capitalizeFirst/capitalize-first.pipe';
import { OrderByNumberPipe } from 'src/app/components/list/pipes/orderByNumber/order-by-number.pipe';



@NgModule({
  declarations: [
    ListComponent,
    CapitalizeFirstPipe,
    OrderByNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
