import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { MainComponent } from './main/main.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        HeaderNavComponent,
        HeaderBannerComponent,
        MainComponent
    ],
    exports: [
        HeaderComponent,
        MainComponent
    ]
})

export class HomeModule{

}