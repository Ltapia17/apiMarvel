import { Component, OnInit } from '@angular/core';
import { SerieServices } from '../../services/series.service';
import { Result } from '../../interfaces/series.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  constructor(
    public seriesServices:SerieServices,
  ){}

  public series:Result[] = [];
  p: number = 1;
  public noImage: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

  public seriesByName:Result[] = [];



  ngOnInit(): void {
    this.seriesServices.getSeries()
      .subscribe(resp =>{
        // this.series = resp.data.results;
        resp.data.results.forEach(element => {
          if(  element.thumbnail.path.includes(this.noImage)){
            return;
          }

          this.series.push(element)

      });

      })
  }


  searchSerieByName(name:string){
    this.seriesServices.searchSeriesByName(name)
      .subscribe(resp => {
          if(!resp?.data.results)return;
        this.seriesByName = resp?.data.results;
      })

  }



}
