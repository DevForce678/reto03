import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormNewItemComponent implements AfterViewInit ,OnInit {
  
  @Input() label!:string;
  @Input() className = 'btn-primary';
  @Input() selection!:City;
  @ViewChild('newItem') newItem!:ElementRef;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();
  
  ngOnInit(): void {
    console.log('onInit-this.newItem',this.newItem);
    
  }
  ngAfterViewInit(): void {
    // console.log('AfterViewInit-this.newItem',this.newItem);
    this.newItem.nativeElement.focus();
  }

  onAddNewItem():void{
    // console.log('Item->',item);
    this.newItemEvent.emit(this.newItem.nativeElement.value);
  }

  onUpdateItem(): void{
    const city: City = {
      id: this.selection.id,
      name: this.newItem.nativeElement.value
    };
    this.updateItemEvent.emit(city);
    this.clear();
  }

  private clear():void {
    this.newItem.nativeElement.value = '';
  }
  // counterRender():boolean{
  //   console.log("Render form");
    
  // return true;
  // }
  
}
