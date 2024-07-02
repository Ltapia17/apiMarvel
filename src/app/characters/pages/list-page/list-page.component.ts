import { Component, OnInit } from '@angular/core';
import { CharacterServices } from '../../services/characters.service';
import { Result } from '../../interfaces/chraracter.interfaces';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls : ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private charactersServices: CharacterServices){}

  public characters:Result[] =[];
  public charactersSearch:Result[] =[];
  public noImage: string ='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

  p: number = 1;

  searchCharacters(name:string){
    this.charactersServices.searchChacterByName(name)
      .subscribe( resp =>{
        this.charactersSearch = resp.data.results;

      })

  }


  ngOnInit(): void {
    this.charactersServices.getCharacters()
      .subscribe(resp =>{
        // this.characters = resp.data.results

        resp.data.results.forEach(element => {
          if(  element.thumbnail.path.includes(this.noImage)){
            return;
          }

          this.characters.push(element)

      });
      })
  }





}
