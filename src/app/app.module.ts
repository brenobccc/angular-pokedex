import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';

import {SobreComponent} from './views/sobre/sobre.component';
import {HomeComponent} from './views/home/home.component';
import { HomeModule } from './views/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
