import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['../styles/style.scss']
})
export class DashboardTableComponent implements OnInit {
@Input() tabelsData
  constructor() { }

  ngOnInit(): void {
    this.addSettings()
  }
addSettings()
{
  

  this.tabelsData.forEach(element => {
    switch (element.id) {
      case 1:
        // this.color='#6A7EE8'
        element.colorA='#D0E5FF'
        element.colorB='#F2F2F2'
        break;
  
      case 2:
        element.colorA='#FFC56E'
        element.colorB='#FFDDAA'

        break;
  
      case 3:
        element.colorA='#FF5B52'
        element.colorB='#FF9F9A'

        break;
  
      case 4:
        element.colorA='#9AB6FF'
        element.colorB='#D9E3FF'

        break;
  
      case 5:
        element.colorA='#9AB6FF'
        element.colorB='#D9E3FF'

        break;
  
  
      default:
        break;
    }
    
  });
  console.log('myTABEL = ',this.tabelsData);
}
}
