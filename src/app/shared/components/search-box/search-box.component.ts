import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {



  public valueInput:string = '';

  @Output()
  public inputText = new EventEmitter<string>


  searchBox(text:string){
      this.inputText.emit(text);
      this.valueInput = ''

  }

}
