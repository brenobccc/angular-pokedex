import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';


const route: Routes = [
    { 
        path: "",
        component: HomeComponent,
    },
    {
        path: "sobre",
        component: SobreComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}