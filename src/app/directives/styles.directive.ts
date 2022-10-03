import { Directive, HostBinding, Input, } from '@angular/core';

@Directive({
  selector: '[D-Styles]'
})
export class StylesDirective{
  @Input() @HostBinding('attr.value') value!:string;
  @Input() active:boolean = false;

  constructor() { /* TODO document why this constructor is empty */  }


  @HostBinding('class.config') get conf(){
    return this.active;
  }
}
