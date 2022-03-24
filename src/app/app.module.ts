import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { CapitalizeFirstPipe } from './pipes/capitalizeFirst/capitalize-first.pipe';
import { OrderByRankingPipe } from './pipes/orderByRanking/order-by-ranking.pipe';
import { OrderByParamPipe } from './pipes/orderByParam/order-by-param.pipe';
import { OrderByNumberPipe } from './pipes/orderByNumber/order-by-number.pipe';
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    CapitalizeFirstPipe,
    OrderByRankingPipe,
    OrderByParamPipe,
    OrderByNumberPipe,
    BlackBackgroundDirective,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
