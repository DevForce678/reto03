import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
contactForm!:FormGroup;
name!: string;
departments:string[] = [];
selectedCity$ = this.dataSvc.selectedCity$;
// myField = new FormControl();

constructor(
    private readonly fb: FormBuilder,
    private readonly route:ActivatedRoute,
    private readonly dataSvc:DataService ){

}

ngOnInit(): void {
  this.departments = this.route.snapshot.data['departments'];
  // this.myField.valueChanges();
  this.route.queryParams.subscribe((params:Params)=>{
    this.name = params['name'];
  }
  
  );
  this.contactForm =  this.initForm(); 
  //  this.onPathValue(); //recomendable
  // this.onSetValue();


}

onPathValue():void{
  this.contactForm.patchValue({name:'Kelwin'});
 
}
//obliga setear todos los parametros
onSetValue():void{
  
  this.contactForm.setValue({comment:'Hola mundo'});
 
}

onSubmit():void{
  console.log('form ->',this.contactForm.value);

}

initForm():FormGroup{
  //
  return this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    checkAdult:['',[Validators.required]],
    department:[''],
    comment:['',[Validators.required]]


  });
}


}


