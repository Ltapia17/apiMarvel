import { Component, OnInit } from '@angular/core';
import { CharacterServices } from '../../services/characters.service';
import { Result } from '../../interfaces/chraracter.interfaces';
import { Result as ResultComics } from '../../../comics/interfaces/comics.interfaces';
import { Result as ResultSeries } from '../../../series/interfaces/series.interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
  constructor(
    private characterServices: CharacterServices,
    private activatedRoute: ActivatedRoute
  ) {}

  public character?: Result;
  public comicsList: ResultComics[] = [];
  public seriesList:ResultSeries[] = [];
  public style = {
    float: 'left',
    'list-style': 'none',
    'margin-left': '10px',
    'margin-top': '5px',
  };
  public noImage:string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.characterServices.getCharacterById(id)))
      .subscribe((resp) => {
        if (!resp?.data.results) return;
        this.character = resp.data.results[0];
      });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.characterServices.getComicsById(id)))
      .subscribe((resp) => {
        if (!resp?.data.results) return;
        this.comicsList = resp.data.results;
      });


      this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.characterServices.getSeriesById(id)))
      .subscribe((resp) => {
        if (!resp?.data.results) return;
        this.seriesList = resp.data.results;
      });
  }


}
