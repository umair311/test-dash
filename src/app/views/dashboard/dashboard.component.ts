import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../styles/style.scss']
})
export class DashboardComponent implements OnInit {
  // @ViewChild("chart") chart: ChartComponent;

  date: any = false;
  ammount: any = false;
  status: any = false;
  chartVal: any = "line"
  cardsData: any;
  chartsCData:any;
  chartsData:any;
  tabelsData:any=this.dataService.tabelData;
  // chartsData:any=[this.dataService.chartA,this.dataService.chartB,this.dataService.chartB];
  // highcharts = Highcharts;
  constructor(private dataService: DataServiceService) {
    this.cardsData = this.dataService.cards;
    this.chartsData=[this.dataService.chartA,this.dataService.chartB,this.dataService.chartC]
this.tabelsData=this.dataService.tabelData
console.log(this.tabelsData);

    

    //  this.lineGraph()
  }

  ngOnInit(): void {
  }

  doSomething($event: any) {
    $event.stopPropagation();
    //Another instructions
  }
  validDate(event) {

    this.date = event.checked
  }
  validAmount(event) {
    this.ammount = event.checked
  }
  validStats(event) {
    this.status = event.checked
  }


}

