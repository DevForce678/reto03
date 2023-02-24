import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // title = 'Dia 11 del reto';
  // url = ''
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
}
