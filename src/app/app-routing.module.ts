import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MinFINComponent } from './components/min-fin/min-fin.component';
import { MinZKHComponent } from './components/min-zkh/min-zkh.component';
import { MinGORComponent } from './components/min-gor/min-gor.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'minfin',
    component: MinFINComponent
  },
  {
    path: 'minzkh',
    component: MinZKHComponent
  },
  {
    path: 'mingor',
    component: MinGORComponent
  },
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
