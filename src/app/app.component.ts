import { Component, EnvironmentInjector, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dia 11 del reto';
  url = ''
  name!:string;
  cities = ['Barcelona','Madrid','Lima','Quito'];
  selection!:string;
  criteria = '';

  addNewCity(city:string):void{
    this.cities.push(city);
  }

  onCityClicked(city: string):void{
    this.selection = city;
  }
  
  onClear():void{
    this.selection =  '';
  }

  onSearch():void{
    console.log("onSearch");
    
  }
// ngOnChanges(changes: SimpleChanges): void {
//   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
//   //Add '${implements OnChanges}' to the class.
// console.log('Change ->', changes);
// }

// ngOnInit(): void {
//   console.log('OnInit ->');
 
// }
// ngOnDestroy(): void {
//   console.log('Destroy');

// }

}
