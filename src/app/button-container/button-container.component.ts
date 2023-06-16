import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent {
  @Input() current={title:"",color:""};
}
