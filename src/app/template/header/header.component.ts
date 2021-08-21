import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  signup() {
    this.router.navigate(['auth/signup'])
  }
  onHome() {
    this.router.navigate(['auth/home'])

  }
  login() {
    this.router.navigate(['auth/login'])
  }

}
