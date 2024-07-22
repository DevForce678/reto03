import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
// @ts-ignore
const $: any = window['$']

@Component({
  selector: 'app-modal',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('exampleModal') modal?: ElementRef;
  
  openModal(){
    $(this.modal?.nativeElement).modal('show')
  }

  closeModal(){
    $(this.modal?.nativeElement).modal('hide')

  }

}
