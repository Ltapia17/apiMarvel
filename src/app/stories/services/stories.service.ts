import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Stories } from '../interfaces/stories.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class StoriesServices {
  constructor(private http: HttpClient) { }

  private apiKey:string = `${environments.baseUrl}/${environments.type[3]}?apikey=${environments.apikey}&hash=${environments.hash}&ts=${environments.ts}`



    getSeries():Observable<Stories>{
      return this.http.get<Stories>(this.apiKey)
        .pipe(
          catchError(()=> of())
        )
  }

}
