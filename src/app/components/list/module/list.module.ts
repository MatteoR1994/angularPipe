import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { OrderByNumberPipe } from 'src/app/components/list/pipes/orderByNumber/order-by-number.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    OrderByNumberPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
