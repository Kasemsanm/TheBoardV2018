import { Component, Input} from '@angular/core';

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

  sizeDone = 0;
  sizeAll = 0;
  @Input('items') items;
  constructor() {
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

}
