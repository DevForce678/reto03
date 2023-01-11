import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

const departments = ['Marketing','Sales','RRHH','Other'];

//Decorado
@Injectable({providedIn: 'root'})
export class DataResolverService implements Resolve<any>{

    resolve():Observable<any>{
        //TODO: call service
        return of(departments);
    }



}