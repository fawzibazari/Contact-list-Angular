import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
export class Arr {
  name!: string;
  Pseudo!: string;
  Email!: string;
  id!: number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() selectedHero!: Arr;
  @Input() tabpos!: number;

  heroes = this.selectedHero;
  constructor(
    private formcomponent: FormComponent) { }
  arr: Arr[] = []

  ngOnInit() {
  }

  changeUserName(e: any,) {
    var kittensFromLocalStorage = JSON.parse(localStorage.getItem('contact') || '');


    console.log(this.tabpos)
    kittensFromLocalStorage[this.tabpos].name = this.selectedHero.name;
    localStorage.setItem("contact", JSON.stringify(kittensFromLocalStorage));

  }


  // onSelect(hero: Arr): void {
  //   // console.log(this.arr)
  //   this.selectedHero = hero;
  //   // this.arr.push(this.selectedHero);

  //   // localStorage.setItem('contact', JSON.stringify(hero));

  // }


}
