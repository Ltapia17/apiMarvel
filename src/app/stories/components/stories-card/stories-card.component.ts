import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/stories.interface';

@Component({
  selector: 'stories-card',
  templateUrl: './stories-card.component.html',
  styleUrls: ['./stories-card.component.css']
})
export class StoriesCardComponent {

  @Input()
  public storie!:Result;

}
