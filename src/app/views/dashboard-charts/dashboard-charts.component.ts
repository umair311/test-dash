import { Component, Input, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexLegend,
  ApexFill,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  seriesA: ApexAxisChartSeries;
  chartA: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  seriesC: ApexAxisChartSeries;
  chartC: ApexChart;
  legend:ApexLegend;
  fill:ApexFill
  fillA:ApexFill

  // titleA: ApexTitleSubtitle;

};
@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['../styles/style.scss']
})

export class DashboardChartsComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public chartOptionsB: Partial<ChartOptions>;
  public chartOptionsC: Partial<ChartOptions>;
  public chartOptionsD: Partial<ChartOptions>;
  chartVal: any = "line"
  @Input() chartsData
  constructor() {
    console.log('chartsData = ',this.chartsData);
    
   }

  ngOnInit(): void {
    this.chartA();
    this.chartB();
    this.chartC();

  }
  chartA() {
    this.chartOptions = {
      
      series: [this.chartsData[0].valueA,this.chartsData[0].valueB],
      chart: {
        height: 250,
        width:185,
        type: "radialBar",
 
      },
      

      plotOptions: {

        radialBar: {

          dataLabels: {
            name: {
              fontSize: "22px"
            },

            value: {
              fontSize: "16px"
            },

          }

        }

      },
      fill:{
        colors: ['#71DA86', '#F47585']
      },

      labels: ["Success", "Rejected"],
    };

  }
  chartB() {
    this.chartOptionsB = {
      series: [this.chartsData[1].valueA,this.chartsData[1].valueB],
      chart: {
        height: 250,
        width:185,
        type: "radialBar",

      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },

            value: {
              fontSize: "16px"
            }


          }
        }
      },
      fill:{
        colors: ['#0E7DB7', '#FFB74A']
      },
      labels: ["Apples", "Oranges"]



    };

  }
  chartC() {
    this.chartOptionsC = {
      seriesA: [
        {
          name: "Desktops",
          data: this.chartsData[2]
        }
      ],
      chartA: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      // title: {
      //   text: "Product Trends by Month",
      //   align: "left"
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
  }
  chartD() {
    this.chartOptionsD = {
      seriesC: [
        {
          name: "basic",
          data: this.chartsData[2]
        }
      ],
      chartC: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
  }
  changeChart(event) {
    this.chartVal = event.target.value;
    if (this.chartVal == 'line') {
      this.chartC()
    }
    else {
      this.chartD()
    }
  }

}
