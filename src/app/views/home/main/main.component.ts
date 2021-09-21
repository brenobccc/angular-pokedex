import { Component, OnInit } from '@angular/core';
import { Pokedata } from 'src/app/models/poke.model';
import { PokesDataService } from 'src/app/service/pokes-data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  poks: any;
  error: any;
  //construi tudo que precisa antes de iniciar
  constructor(private pokeData: PokesDataService) { 
    this.get();
  }
  //quando inicia o componente
  //life cicle
  ngOnInit(): void {
  }

  //irá usar o servico e disponibilizar no componente
  get() {
    this.pokeData.getPokes().subscribe((data: Pokedata) => {
      this.poks = data;
      console.log("dados: "+data);
      console.log(this.poks);

    }, (error: any) => {
      this.error = error;
      console.error("ERROR:",error);
    })
  }

}
