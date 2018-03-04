import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { ResolverService } from './services/resolver.service';


const routes: Routes = [
  {path: '', redirectTo: '/page1', pathMatch : 'full'},
  {path : 'page1', component : Page1Component},
  {
  	path : 'page2', 
  	component : Page2Component, 
    resolve: {
      users: ResolverService
    }  	
  },
  {path : 'page3', component : Page3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
