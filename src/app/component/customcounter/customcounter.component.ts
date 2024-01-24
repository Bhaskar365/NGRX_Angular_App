import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getMessage } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit{

  counterInput!: number;
  actiontype = 'add';
  message = '';
  counterSubscribe!:Subscription;

  constructor(private store: Store<{ counter: CounterModel }>) { }

  ngOnInit() {
    this.counterSubscribe = this.store.select(getMessage).subscribe(data => {
      this.message = data;
      console.log('custom counter')
    });
  }

  OnIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterInput , action: this.actiontype }));
  }

}
