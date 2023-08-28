import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  @HostBinding('class.red-color') bool = true;


}