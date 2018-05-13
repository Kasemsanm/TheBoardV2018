import { Component } from '@angular/core';

/**
 * Generated class for the ToDosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'to-dos',
  templateUrl: 'to-dos.html'
})
export class ToDosComponent {

  sizeDone = 1;
  sizeAll = 4;
  items = [1,2,3,4,5,6,7,8,9];

  constructor() {
  }

}
