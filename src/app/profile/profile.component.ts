import { Component, OnInit } from '@angular/core';
import { Arr, FormComponent } from '../form/form.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private formcomponent: FormComponent) { }
   form: Arr[] = []

  ngOnInit() {
    this.form = JSON.parse(localStorage.getItem('contact')|| '');

    console.log(this.form)
  }
  


  

}
