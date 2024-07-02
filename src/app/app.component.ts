import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieDB';


  public menuItem= [
    {name:'Comics',route: 'comics'},
    {name:'Historias',route: 'storie'},
    {name:'Series',route: 'series'},
    {name:'Personajes',route: 'characters'}
  ]
}
