import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(public route: Router) {

	}
	canActivate() {
		let seller = JSON.parse(localStorage.getItem('user'));


		if (seller == void 0 ||seller.token==void 0) {
			return true;
		}
		else {

			this.route.navigate(['/main']);
			return false;
		}
	}
}


