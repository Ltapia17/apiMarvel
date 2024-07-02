import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/comics.interfaces';

@Component({
  selector: 'comics-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public comic!: Result

  public styleTitle(name:string):any{
    if(name.length <= 20 )
      return {'margin-bottom': '30px'}

    return ''

  }

}
