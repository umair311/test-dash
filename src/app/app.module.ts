import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateMainAppComponent } from './template/template-main-app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartModule } from 'angular-highcharts';
import { DashboardCardsComponent } from './views/dashboard-cards/dashboard-cards.component';
import { DashboardChartsComponent } from './views/dashboard-charts/dashboard-charts.component';
import { DashboardTableComponent } from './views/dashboard-table/dashboard-table.component';

@NgModule({
  declarations: [
  AppComponent,
  TemplateMainAppComponent,
  DashboardComponent,
  DashboardCardsComponent,
  DashboardChartsComponent,
  DashboardTableComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    ChartModule

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
