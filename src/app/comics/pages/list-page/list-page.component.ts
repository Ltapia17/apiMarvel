import { Component, OnInit } from '@angular/core';
import { ComicsServices } from '../../services/comics.service';
import { NgControl } from '@angular/forms';
import { Result, Data } from '../../interfaces/comics.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  public comics: Result[] = [];
  public comicsSearchs:Result[]=[];

  getSearchComics(text:String){
    this.comicsServices.getComicsByName(text)
      .subscribe(resp =>{
        if(!resp?.data.results)return;
        this.comicsSearchs = resp?.data.results;
      })
  }

  public noImage: string =
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

  ngOnInit(): void {
    this.comicsServices.getComics().subscribe((resp) => {
      // this.comics = resp.data.results;

      resp.data.results.forEach(element => {
          if(  element.thumbnail.path.includes(this.noImage)){
            return;
          }

          this.comics.push(element)

      });
    });
  }

  constructor(private comicsServices: ComicsServices) {}

  p: number = 1;
}
