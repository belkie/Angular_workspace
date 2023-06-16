import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.css']
})
export class ButtonsPageComponent {
  galleryList = [
    {
      title:"Gallery Image",
      color:"#5EB1CF"
    },
    {
      title:"Gallery Image",
      color:"#9FBC2E"
    },
    {
      title:"Gallery Image",
      color:"#F5BC3B"
    },
    {
      title:"Gallery Image",
      color:"#ED5758"
    }
  ];
}
