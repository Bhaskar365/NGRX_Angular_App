import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent {

  counterInput!: number;
  actiontype = 'add';

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  OnIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterInput , action: this.actiontype }));
  }

}
