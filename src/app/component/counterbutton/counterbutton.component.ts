import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, decrement, increment, reset } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';


@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {

  constructor(private store:Store<{counter:CounterModel}>){}

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }

  OnRename(){
    this.store.dispatch(changeText({message:'This is renamed text'}));
  }
}
