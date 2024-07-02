import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Series } from '../interfaces/series.interfaces';
import { environments } from 'src/environments/environments';
import { CharactersComic } from '../interfaces/charactersComics.interfaces';

@Injectable({providedIn: 'root'})
export class SerieServices {
  constructor(private htpp: HttpClient) { }

public apiKey:String = `${environments.baseUrl}/${environments.type[2]}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}&limit=50`
public apikeyBase:string = `${environments.baseUrl}/${environments.type[2]}`;

getSeries():Observable<Series>{
    return this.htpp.get<Series>(`${this.apiKey}`)
      .pipe(
        catchError(()=> of())
      )
}

getSerieById(id:string):Observable<Series | null>{
  return this.htpp.get<Series>(`${this.apikeyBase}/${id}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
    .pipe(
      catchError( () => of(null))
    )
}

searchSeriesByName(name:string):Observable<Series | null>{
  return this.htpp.get<Series>(`${this.apikeyBase}?titleStartsWith=${name}&apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
}

getCharactersByComic(id:string):Observable<CharactersComic>{
  return this.htpp.get<CharactersComic>(`${this.apikeyBase}/${id}/characters?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
    .pipe(
      catchError( () => of())
    )
}

}
