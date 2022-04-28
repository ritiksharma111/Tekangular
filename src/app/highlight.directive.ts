import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // directives gives common functionality to the html elements

  // we need the element to implement the functionality



  constructor(private elem: ElementRef) {
    console.log("Element we got", this.elem.nativeElement)
   }

}
