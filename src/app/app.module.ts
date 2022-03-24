import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { OrderByRankingPipe } from './pipes/orderByRanking/order-by-ranking.pipe';
import { OrderByParamPipe } from './pipes/orderByParam/order-by-param.pipe';
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';
import { ListModule } from './components/list/module/list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OrderByRankingPipe,
    OrderByParamPipe,
    BlackBackgroundDirective,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
