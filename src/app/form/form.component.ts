import { Component, OnInit } from '@angular/core';
export class Arr {
  name!: number;
  Pseudo!:string;
  Email!:string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  arr:Arr[] = [];
 
  public name: any;
  
  public Pseudo: any;

  public Email: any;

  constructor() { }

  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('contact')|| '')

 }

 form(){

  if(!this.name || !this.Pseudo || !this.Email) {
    return console.log('pas bon bolosse')
  }

  else {
    let json = {
      name: this.name,
      Pseudo: this.Pseudo,
      Email: this.Email,
    }
    this.arr.push(json);
    localStorage.setItem('contact', JSON.stringify(this.arr));
    this.name="";
    this.Pseudo="";
    this.Email="";
  }
 }




}