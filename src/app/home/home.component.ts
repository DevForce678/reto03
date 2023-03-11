import { AfterContentChecked, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit /*,AfterViewInit*/ {
  // @ViewChild(NgModel)filterInput!:NgModel;
  // title = 'Dia 11 del reto';
  // url = ''
  // name!:string;
  cities: City[] = []; //['Barcelona','Madrid','Lima','Quito'];
  selection: City = {
    _id:'',
    name: ''
  };
  criteria = '';

  constructor(private readonly dataSvc: DataService){

  }

  ngOnInit():void {
    this.dataSvc.selectedCity$.subscribe((city:City) => this.selection = city);

    this.dataSvc.getCities().subscribe(res => {
      this.cities = [...res];

    })
  }

  // ngAfterViewInit(): void {
  //   this.filterInput.valueChanges?.subscribe(res =>{
  //     console.log('res',res);
  //     this.filter(res);
  //   });
  // }

  // filter(query:string):void{
  //   console.log('query',query);
    
  // }

  addNewCity(city:string):void {
    // this.cities.push(city);
    this.dataSvc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    })
  }

  onCitySelected(city: City):void {
    // this.selection = city;
    this.dataSvc.setCity(city);
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
