import {Directive,ElementRef,Input,ngAfterViewInit } from '@angular/core';
import {jqueryui} from 'jqueryui';

declare var jQuery:any;

@Directive({
  selector: '[Draggable]',
  properties: [

  ]
})
export class Draggable implements ngAfterViewInit  {
  public _element:any;

  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngAfterViewInit() {
    console.log(this._element);
    jQuery(this._element).draggable({containment:'body'});
  }

}
