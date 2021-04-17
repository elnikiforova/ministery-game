import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MinZKHComponent } from './components/min-zkh/min-zkh.component';
import { MinGORComponent } from './components/min-gor/min-gor.component';
import { MinFINComponent } from './components/min-fin/min-fin.component';
import { IntroComponent } from './components/intro/intro.component';
import { WaveComponent } from './components/wave/wave.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinZKHComponent,
    MinGORComponent,
    MinFINComponent,
    IntroComponent,
    WaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
