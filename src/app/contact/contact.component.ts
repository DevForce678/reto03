import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm{
  "name":string;
  "checkAdult":boolean;
  "departament":string;
  "comment":string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent  implements OnInit{
  id!:string;

  model = {
    "name":"",
    checkAdult:false,
    departament:"*", 
    comment:" "
  }

  //NOTA: se puede usar la comillas dobles tambien en el model
//Injection de dependencias
  constructor(private readonly route:ActivatedRoute){}

  ngOnInit(): void {
    //Observable
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });
   
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  // onSubmit(values: any):void{

  //   console.log('Form values',values);
   
  // }
  onSubmit(form: NgForm):void{

    console.log('Form ',form);
   
  }

}
