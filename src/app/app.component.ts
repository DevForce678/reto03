import {
  Component, EnvironmentInjector, OnChanges, OnDestroy, OnInit,
  ViewChild,
} from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ModalComponent) modal?: ModalComponent;

  open() {
    this.modal?.openModal();
  }

}
