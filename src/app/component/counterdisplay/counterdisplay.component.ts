import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription , Observable } from 'rxjs';
import { getCounter } from '../../shared/store/counter.selector';
import { AppstateModel } from '../../shared/Global/appstate.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit,OnDestroy {

  constructor(private store:Store<AppstateModel>) { }

  counterDisplay!:number;
  message:string = "";
  counterSubscription!:Subscription;
  counter$!:Observable<CounterModel>;

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe(data=>{
      this.counterDisplay = data;
      // this.message = data;
      console.log('counter display');
    });

    //this.counter$ = this.store.select('counter');
  }

  ngOnDestroy():void {
    if(this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
