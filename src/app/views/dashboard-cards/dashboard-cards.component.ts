import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['../styles/style.scss']
})
export class DashboardCardsComponent implements OnInit {
  @Input() cardsData;
  constructor() { 
    console.log('cardsData',this.cardsData);
    
  }

color:any='';
  ngOnInit(): void {

    this.getCardsDAta()
  }
getCardsDAta()
{
  this.cardsData.forEach(element => {
    switch (element.name) {
      case 'Total Transactions':
        // this.color='#6A7EE8'
        element.color='#6A7EE8'
        break;
  
      case 'Successful':
        element.color='#71DA86'

        break;
  
      case 'Rejected':
        element.color='#F47585'

        break;
  
      case 'Payments':
        element.color='#0E7DB7'

        break;
  
      case 'Refund':
        element.color='#FFB74A'

        break;
  
  
      default:
        break;
    }
    
  });

}
}
