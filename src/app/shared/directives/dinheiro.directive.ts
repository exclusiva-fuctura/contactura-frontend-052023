import { NgControl } from '@angular/forms';
import { Directive, HostListener, ElementRef, DoCheck } from '@angular/core';
import { padLeft } from '../functions/pad-left.function';

@Directive({
  selector: '[dinheiro]'
})
export class DinheiroDirective  implements DoCheck {

  public nativeElement: HTMLInputElement;

  constructor(
    public model: NgControl,
    public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  /**
   * Verificação de que o model e o valor do input estão iguais
   */
  ngDoCheck(): void {
    if ((`${this.model.value}`).replace(/[^0-9]/g, '') !== (`${this.nativeElement.value}`).replace(/[^0-9]/g, '')) {
      this.onInputChange('doCheck', true);
    }
  }

  /**
   * Escutar os eventos do elemento input
   * @param event
   * @param updateModel
   */
  @HostListener('input', ['input', 'true'])
  onInputChange(event: any, updateModel: boolean): void {
    let viewValue = '';
    let modelValue = '';

    if (this.nativeElement.value) {
      viewValue = this.nativeElement.value;
    }
    if (this.model.value) {
      const valueAsStr = (`${this.model.value}`).replace(/[^0-9]/g, '');

      if (updateModel) {
        // only number
        modelValue = viewValue.replace(/[^0-9]/g, '');
      }

      if (modelValue) {
        let num = padLeft(modelValue,9,'0').replace(/(\d{7})(\d{2})/g,"\$1.\$2");
        modelValue = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(+num);
      }
      this.nativeElement.value = modelValue;
    }
  }

}
