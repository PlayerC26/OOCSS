import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  backgroundColor: string = '';
  
  changeBackground(color: string) {
    this.backgroundColor = color;
  }

}
