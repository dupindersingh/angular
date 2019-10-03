import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {allRoutes, AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    allRoutes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
