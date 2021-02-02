import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent  {
  name = new FormControl('');
  email = new FormControl('');
  mobileNum= new FormControl('');
 
  
}
