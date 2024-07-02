import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Character} from '../interfaces/chraracter.interfaces';
import { environments } from 'src/environments/environments';
import { Comics } from 'src/app/comics/interfaces/comics.interfaces';
import { Series } from 'src/app/series/interfaces/series.interfaces';

@Injectable({ providedIn: 'root' })
export class CharacterServices {
  constructor(private http: HttpClient) {}

  public apiKey: string = `${environments.baseUrl}/${environments.type[0]}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`;
  public apikeyBase: string = `${environments.baseUrl}/${environments.type[0]}`;

  public getCharacters(): Observable<Character> {
    return this.http
      .get<Character>(`${this.apiKey}&limit=50`)
      .pipe(catchError(() => of()));
  }

  public getCharacterById(id: string): Observable<Character | undefined> {
    return this.http
      .get<Character>(
        `${this.apikeyBase}/${id}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`
      )
      .pipe(catchError(() => of(undefined)));
  }

  public searchChacterByName(name:string): Observable<Character>{
    return this.http
      .get<Character>(`${this.apiKey}&nameStartsWith=${name}`)
        .pipe(
          catchError( () => of())
        )
  }


  public getComicsById(id:String):Observable<Comics>{
    return this.http.get<Comics>(`${this.apikeyBase}/${id}/comics?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
  }


  public getSeriesById(id:String):Observable<Series>{
    return this.http.get<Series>(`${this.apikeyBase}/${id}/series?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`)
  }
}
