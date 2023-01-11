import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html', 
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy{
  @Input() color!:string; //decorador
  @Input() label!:string; //decorador
  @Input() selection!:string; //decorador


constructor(){}
ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log('Change ->', changes);

}
ngOnInit(): void {
   console.log('OnInit ->');

}

ngOnDestroy(): void {
  console.log('Destroy');

}

// counterRender():boolean{
//   console.log("Render form");
  
// return true;
// }


}
