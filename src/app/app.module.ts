import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';

import {SobreComponent} from './views/sobre/sobre.component';
import {HomeComponent} from './views/home/home.component';
import { HomeModule } from './views/home/home.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [//componentes que poderão ser usados
    AppComponent,
    SobreComponent,
    HomeComponent
  ],
  imports: [//módulos da aplicação
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],//serviços
  bootstrap: [AppComponent]//componente que será renderizado
})
export class AppModule { }//exportação da classe
