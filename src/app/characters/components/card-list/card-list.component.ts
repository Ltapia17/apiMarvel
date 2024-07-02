import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/chraracter.interfaces';

@Component({
  selector: 'character-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {


  public styleTitle(name:string):any{
    if(name.length <= 20 )
      return {'margin-bottom': '30px'}

    return ''

  }


  @Input()
  public characters!: Result;



}
