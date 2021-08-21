import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  cards: any = [
    {
      id: 1,
      name: 'Total Transactions',
      valueOne: 123456789,
      valueTwo: 123456789101
    },
    {
      id: 2,
      name: 'Successful',
      valueOne: 123456789,
      valueTwo: 123456789101
    },
    {
      id: 3,
      name: 'Rejected',
      valueOne: 123456789,
      valueTwo: 123456789101
    },
    {
      id: 4,
      name: 'Payments',
      valueOne: 123456789,
      valueTwo: 123456789101
    },
    {
      id: 5,
      name: 'Refund',
      valueOne: 123456789,
      valueTwo: 123456789101
    }
  ]
  chartA = {
    valueA: 15,
    valueB: 24
  }
  chartB = {
    valueA: 85,
    valueB: 24
  }
  chartC = [0, 30, 40, 50, 70, 10, 50, 60, 100, 150, 100, 70]
  tabelData = [
    { id: 1, date: '01 Dec 2020, 12:32', payment: 'Paypal', operations: 'Refunded', amounts: '000000.00$' },
    { id: 2, date: '01 Dec 2020, 12:32', payment: 'Paypal', operations: 'Refunded', amounts: '000000.00$' },
    { id: 3, date: '01 Dec 2020, 12:32', payment: 'Paypal', operations: 'Refunded', amounts: '000000.00$' },
    { id: 4, date: '01 Dec 2020, 12:32', payment: 'Paypal', operations: 'Refunded', amounts: '000000.00$' },
    { id: 5, date: '01 Dec 2020, 12:32', payment: 'Paypal', operations: 'Refunded', amounts: '000000.00$' }]
}
