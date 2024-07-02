import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { Comics } from '../interfaces/comics.interfaces';
import { Character } from 'src/app/characters/interfaces/chraracter.interfaces';
import { Comic } from '../interfaces/comic.interfaces';


@Injectable({providedIn: 'root'})
export class ComicsServices {

  constructor(private htpp: HttpClient) { }

  public apiKey: string = `${environments.baseUrl}/${environments.type[1]}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}&limit=50`;
  public apikeyBase: string = `${environments.baseUrl}/${environments.type[1]}`;
  public apiKeyCharacters: string = `${environments.baseUrl}/${environments.type[0]}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`

  getComics():Observable<Comics>{
    return this.htpp.get<Comics>(`${this.apiKey}`)
      .pipe(
        catchError( () => of())
      )
  }


  getComicsbyId(id:string):Observable<Comics | null>{
      return this.htpp.get<Comics>(`${this.apikeyBase}/${id}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
      .pipe(
        catchError( () =>of(null))
      )
  }

  getComicsByName(term:String):Observable<Comics | null>{
    return this.htpp.get<Comics>(`${this.apikeyBase}?titleStartsWith=${term}&apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
      .pipe(
        catchError( () =>of(null))
      )
  }

  getCharacterByComic(id:string):Observable<Comic | null>{
    return this.htpp.get<Comic>(`${this.apikeyBase}/${id}/characters?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
      .pipe(
        catchError( () => of(null))
      )
  }

  public getCharacters(id:String): Observable<Character> {
    return this.htpp
      .get<Character>(`${this.apiKeyCharacters}/comics=${id}`)
      .pipe(catchError(() => of()));
  }

}
