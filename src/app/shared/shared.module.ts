import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './capitalizeFirst/capitalize-first.pipe';



@NgModule({
  declarations: [
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizeFirstPipe
  ]
})
export class SharedModule { }
