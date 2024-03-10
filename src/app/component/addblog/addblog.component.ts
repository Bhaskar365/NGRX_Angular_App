import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {

  constructor(private dialogref:MatDialogRef<AddblogComponent>, private builder:FormBuilder) {}

  closepopup() {
    this.dialogref.close();
  }

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required) 
  });

}
