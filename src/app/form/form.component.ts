import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';


export class Arr {
  name!: string;
  Pseudo!: string;
  Email!: string;
  id!: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  arr: Arr[] = [];

  test: Arr[] = []

  public id: number = 0;

  public name: any;

  public Pseudo: any;

  public Email: any;

  public jsonX: any;


  tabpos:number=0
  heroes = this.arr;
  selectedHero!: Arr;

  test2: string= ""
  constructor(private formBuilder: FormBuilder) { }

  bioSection = new FormGroup({
    name: new FormControl(''),
    Pseudo: new FormControl(''),
    Email: new FormControl(''),
  });

  callingFunction() {
    if (!this.bioSection.value.Email|| !this.bioSection.value.Pseudo || !this.bioSection.value.name) {
       console.log('pas bon');
    }

    else {
      if (this.arr.length == 0) {
      console.log(this.bioSection.value.name)
      let json = {
        id: 1,
        name: this.bioSection.value.name,
        Pseudo: this.bioSection.value.Pseudo,
        Email: this.bioSection.value.Email,
      }
      this.arr.push(json);
      localStorage.setItem('contact', JSON.stringify(this.arr));
      this.name = "";
      this.Pseudo = "";
      this.Email = "";
    }
    else {
      let m = this.arr.length - 1
      let json = {
        id: this.arr[m].id + 1,
        name: this.bioSection.value.name,
        Pseudo: this.bioSection.value.Pseudo,
        Email: this.bioSection.value.Email,
      }
      this.arr.push(json);
      localStorage.setItem('contact', JSON.stringify(this.arr));
      this.name = "";
      this.Pseudo = "";
      this.Email = "";
    }
  }


   }
  ngOnInit() {
    this.arr = JSON.parse(localStorage.getItem('contact') || '')

  }

  changeUserName(e: any) {
    console.log(e);
    console.log(this.heroes)
  }



  onSelect(hero: Arr, index: number): void {

    console.log(this.test2)
    this.selectedHero = hero;
    this.test2 = this.selectedHero.name
    console.log(this.test2)
    console.log("re")
    this.tabpos=index
    let json = {
      id: this.arr[index].id,
      name: this.test2,
      Pseudo: this.arr[index].Pseudo,
      Email: this.arr[index].Email,
    }
  }
  
  Recup(id: number, x: Arr) {
    this.id = id
    this.name = name
    this.jsonX = {
      id: x.id,
      name: x.name,
      Pseudo: x.Pseudo,
      Email: x.Email,
    }

    this.jsonX = JSON.stringify(this.jsonX)
    console.log(this.jsonX)
  }


}