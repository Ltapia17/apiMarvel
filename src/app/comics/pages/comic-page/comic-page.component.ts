import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ComicsServices } from '../../services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/comics.interfaces';
import { Result as ResultCharacter } from '../../interfaces/comic.interfaces';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css'],

})
export class ComicPageComponent implements OnInit {
  constructor(
    private comicsService: ComicsServices,
    private activaredRoute: ActivatedRoute
  ) {}

  public comic?: Result;
  public comicCharacters: ResultCharacter[] =[];


  ngOnInit(): void {
    this.activaredRoute.params
      .pipe(
        switchMap( ({id}) => this.comicsService.getComicsbyId(id) )
      ).subscribe(resp =>{
        if(!resp?.data.results)return;
        this.comic = resp.data.results[0];
      });

    this.activaredRoute.params
      .pipe(
        switchMap( ({id}) => this.comicsService.getCharacterByComic(id))
      ).subscribe(resp =>{
        if(!resp)return;
         this.comicCharacters =  resp.data.results;
         console.log(this.comicCharacters);


      });


  }




}
