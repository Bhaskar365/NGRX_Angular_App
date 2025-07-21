import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getspinnerstate } from '../../shared/store/Blog/Blog.selectors';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css'
})
export class LoadingspinnerComponent implements OnInit {

  isLoaded = false;

  constructor(private store:Store) { }
 
  ngOnInit(): void {
    this.store.select(getspinnerstate).subscribe(res => {
      this.isLoaded = res;
    })
  }

}
