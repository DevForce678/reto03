import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  title = 'Dia 11 del reto';
  url = ''
  // name!:string;
  cities: City[] = []; //['Barcelona','Madrid','Lima','Quito'];
  selection: City = {
    _id:'',
    name: ''
  };
  criteria = '';

  constructor(private readonly dataSVc: DataService){

  }

  ngOnInit():void {
    this.dataSVc.getCities().subscribe(res => {
      this.cities = [...res];
      console.log('cities', this.cities);
      console.log(this.selection);

    })
  }

  addNewCity(city:string):void {
    // this.cities.push(city);
      this.dataSVc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    })
  }

  onCitySelected(city: City):void {
    this.selection = city;
  }

  onClear(): void {
    // this.selection =  '';
    this.selection = {
      _id:'',
      name: ''
    }
  }
  onCityDelete(id: string):void {
    console.log('id',id);
  }
  // onSearch():void{
  //   console.log("onSearch");

  // }
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
