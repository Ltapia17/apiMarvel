import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/series.interfaces';

@Component({
  selector: 'serie-card-list',
  templateUrl: './serie-card-list.component.html',
  styleUrls: ['./serie-card-list.component.css']
})
export class SerieCardListComponent {

  @Input()
  public serie!:Result;



}
