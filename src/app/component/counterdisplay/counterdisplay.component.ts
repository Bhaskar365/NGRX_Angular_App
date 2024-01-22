import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription , Observable } from 'rxjs';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit , OnDestroy{

  constructor(private store:Store<{counter:CounterModel}>) { }

  counterDisplay!:number;
  message:string = "";
  counterSubscription!:Subscription;
  counter$!:Observable<CounterModel>;

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
      this.message = data.message;
    });

    this.counter$ = this.store.select('counter');

  }

  ngOnDestroy():void {
    if(this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
