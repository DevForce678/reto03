import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface City {
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API =  environment.api;//'';

  constructor(private readonly http: HttpClient) { }

    addNewCity(city: string): Observable<City>{
      // const headers = new HttpHeaders({
      //   // 'Content-Type': 'application/x-www-form-urlencoded'
      //   // 'Access-Control-Allow-Origin': '*' //,'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT'
      //   'Content-Type': 'application/json' //,'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT'

      // });
      // const options =  {headers: headers};
      
      const body =  { name: city};
      // return this.http.post<City>( this.API, body, options);
      return this.http.post<City>( this.API, body);

    }

    getCities(): Observable<City[]>{
      return this.http.get<City[]>(this.API);
    }

    updateCity(city: City): Observable<void>{
      const body =  {name: city.name};
      return this.http.put<void>(`${ this.API}/${ city._id}`,body)

    }

    deleteCity(id: string): Observable<void>{
      return this.http.delete<void>(`${this.API}/${id}`);

    }
 

}
