import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAuthGuard implements CanActivate {
  constructor(public route: Router) {

  }
  canActivate() {
    let seller = JSON.parse(localStorage.getItem('user'));
    // let token=admin.token;


    if (seller && seller.token != null) {

      return true
    }
    else {
      this.route.navigate(['/auth/home']);
      return false;
    }
  }
}

