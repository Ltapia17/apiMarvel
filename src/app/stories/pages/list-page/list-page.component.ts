import { Component, OnInit } from '@angular/core';
import { StoriesServices } from '../../services/stories.service';
import { Result } from '../../interfaces/stories.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private storiesServices:StoriesServices){}

  public stories:Result[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.storiesServices.getSeries()
      .subscribe(resp =>{
        this.stories = resp.data.results
      })
  }
}
