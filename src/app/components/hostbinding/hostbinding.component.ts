import { style } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  // template:`<p>hello {{value}}!</p>`,
  styleUrls: ['./hostbinding.component.css']
  // styles:[`.config{ box-shadow: 2px 2px 3px red } p{ margin-top: 10px }`]
})
export class HostbindingComponent implements OnInit {

  active!:boolean;
  value!:string;

  constructor() {
    this.value = "Derson Ussuale";

   }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    this.active = true;
  }


}
