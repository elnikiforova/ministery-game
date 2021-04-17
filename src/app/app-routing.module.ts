import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
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
  { path: '', component: IntroComponent },
  { path: '**', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
