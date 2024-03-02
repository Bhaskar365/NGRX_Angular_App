import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css'
})
export class BlogComponentComponent implements OnInit {

  constructor(private store:Store<>) {}

  ngOnInit(): void {
    
  }
}
