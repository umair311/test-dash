import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TemplateMainAppComponent } from './template/template-main-app.component';








const routes: Routes = [
	// { path: 'dash', redirectTo: 'dashboard', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
