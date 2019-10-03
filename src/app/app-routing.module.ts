import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {HomeDetailsComponent} from './home-details/home-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',  // route > /home
    component: HomeComponent,
    children: [
      {
        path: '', // route > /home/
        component: HomeDetailsComponent,
      },
      {
        path: 'user/:name', // route > /home/user/dupinder
        component: HomeDetailsComponent,
      }
    ]
  },
  {
    path: 'list',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes = [HomeComponent, ListComponent, HomeDetailsComponent];
