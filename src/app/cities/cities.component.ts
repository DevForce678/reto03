import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() _city!:City;//string;City
  @Input() _selection!: City;//string; City
  @Output() citySelectedEvent = new EventEmitter<City>(); //new EventEmitter<City>();
  @Output() cityDeleteEvent =  new EventEmitter<string>();

  onCitySelected(city:City):void {
  //emit
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
  // counterRender():boolean{
  //   console.log("Render form");

  // return true;
  // }

  ngOnInit() {
    console.log("city:", this._city);
    console.log("selection:", this._selection);
  }



}
