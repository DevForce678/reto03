import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormNewItemComponent {
  @Input() label!:string;
  @Input() className = 'btn-primary';
  @Input() selection!:City;

  @Output() newItemEvent = new EventEmitter<string>();
  
  onAddNewItem(item:string):void{
    console.log('Item->',item);
    this.newItemEvent.emit(item);
  }

  // counterRender():boolean{
  //   console.log("Render form");
    
  // return true;
  // }
  
}
