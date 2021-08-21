import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-main-app',
  templateUrl: './template-main-app.component.html',
  styleUrls: ['./template-main-app.component.scss']
})



export class TemplateMainAppComponent implements OnInit {
  sidenav: any = '20';
  sidebar: any = '80';
  button: any = '15'
  tog: boolean = true;
  isMenuHidden = false;
  submenue: any = false;
  menus: any[];
  path: any = 'assets/'
  user_name: any;


  constructor( public route: Router) {
    // this.user_name = localStorage.getItem('name');
    this.menus = [];

  }


  ngOnInit(): void {
    // this.mainservice.admin_name.subscribe(
    //   (data) => {
    //     this.user_name = data;
    //   }
    // );

    this.menus = [
      { routerLink: '#', image: '1', label: "Home" },
      { routerLink: '#', image: '1', label: "My Account" },
      { routerLink: '#', image: '1', label: "Configuration" },
      { routerLink: '#', image: '1', label: "Report" },
      { routerLink: '#', image: '1', label: "Merchant" },
      { routerLink: '#', image: '1', label: "Transaction" },
      { routerLink: '#', image: '1', label: "Webbook" },
      { routerLink: '#', image: '1', label: "Customer" },


    ];
  }

  toogle() {
    this.tog = !this.tog;
    if (this.tog === true) {
      this.sidenav = '15';
      this.sidebar = '85';
      this.button = '15';
    }
    else {
      this.sidenav = '5';
      this.sidebar = '95';
      this.button = '100';
    }
  }
  mouseover(i) {
    this.path = "assets/images/"
  }
  mouseout(i) {
    this.path = "assets/"
  }
  logout() {

    // this.mainservice.onLogout().then(result => {
    //   if (result.code == 200) {
    //     localStorage.removeItem('sxi-login');

    //     window.location.reload();
    //   }
    // })

  }
  profile() {
    this.route.navigate(['main/profile']);
  }
  onMenuClick(menu, event): void {
    localStorage.removeItem('componentSettings');
    event.preventDefault();
    event.stopPropagation();

    this.menus.forEach(element => {
      if (element.label != menu.label) {
        element.opened = false;
      }
    });
    menu.opened = !menu.opened;
    this.submenue = !this.submenue
    console.log('Parent', menu);

  }

  onChildClick(menu, event): void {
    event.preventDefault();
    event.stopPropagation();
    // console.log('Child', menu);
  }

  onMenuHidden() {

    this.menus.forEach(element => {
      element.opened = false;
    });
    this.isMenuHidden = !this.isMenuHidden;
    console.log(this.isMenuHidden);
  }

}

