import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[maiusculo]'
})
export class MaiusculoDirective {

  public nativeElement: HTMLInputElement;

  constructor(
    public model: NgControl,
    public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  @HostListener('input', ['input', 'true'])
  onInputChange(event: any, updateModel: boolean): void {
    let viewValue = '';

    if (this.nativeElement.value) {
      viewValue = this.nativeElement.value;
    }
    if (this.model.value) {
      viewValue = viewValue.toUpperCase();

      this.nativeElement.value = viewValue;
    }
  }

}
