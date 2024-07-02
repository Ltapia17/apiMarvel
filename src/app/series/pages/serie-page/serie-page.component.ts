import { Component, OnInit } from '@angular/core';
import { SerieServices } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/series.interfaces';
import { Result as ResultCharacters } from '../../interfaces/charactersComics.interfaces';

@Component({
  selector: 'app-serie-page',
  templateUrl: './serie-page.component.html',
  styleUrls: ['./serie-page.component.css']
})
export class SeriePageComponent implements OnInit{

  constructor(private seriesServices:SerieServices,private activatedRoute:ActivatedRoute){}

  public serie!:Result;
  public characterSerie: ResultCharacters[] = [];

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.seriesServices.getSerieById(id) )
      ).subscribe(resp =>{
        if(!resp?.data.results)return;
        this.serie = resp.data.results[0]

      });

      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.seriesServices.getCharactersByComic(id) )
        ).subscribe(resp =>{
          this.characterSerie = resp.data.results

        })
  }


}
